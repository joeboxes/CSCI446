class ArticlesController < ApplicationController
  # redirecting - edit
  before_filter :set_edit_return_url, :only => [:edit]
  def set_edit_return_url
    session[:edit_redirect] = request.referer
  end
  # redirecting - delete
  before_filter :set_delete_return_url, :only => [:show,:edit]
  def set_delete_return_url
    session[:delete_redirect] = request.referer
  end


  # GET /articles
  # GET /articles.json
  def index # uses paginate
    @articles = Article.paginate page: params[:page], per_page: 10
    #@articles = Article.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    @article = Article.find(params[:id])
    if @article==nil
      redirect_to articles_url
    else
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @article }
      end
    end
  end

  # GET /articles/new
  # GET /articles/new.json
  def new
    @article = Article.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @article }
    end
  end

  # GET /articles/1/edit
  def edit
    @article = Article.find(params[:id])
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(params[:article])

    f = open("info.txt", "w")
    f.write( params )
    f.write( "\n" )
    f.write( params[:article] )
    f.write( "\n" )
    f.write( @article.author_id )
    f.write( "\n" )
    f.write( @article.edit_count )
    error = true
    
    @article.edit_count = 0

    respond_to do |format|
      if @article.save
        format.html { redirect_to @article, notice: 'Article was successfully created.' }
        format.json { render json: @article, status: :created, location: @article }
      else
        #format.html { redirect_to @article, notice: 'AHHHHHHHHHHHHH.' }
        #format.json { render json: @article, status: :unprocessable_entity, location: @article }
        format.html { render action: "new", notice: 'AHHHHHHHHH!' }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /articles/1
  # PUT /articles/1.json
  def update
    @article = Article.find(params[:id])
    # increase edit by 1
    if @article.edit_count
      @article.edit_count = @article.edit_count + 1
    else
      @article.edit_count = 0
    end
    # save
    respond_to do |format|
      if @article.update_attributes(params[:article])
        #format.html { redirect_to @article, notice: 'Article was successfully updated.' }
        format.html { redirect_to session[:edit_redirect], notice: 'Article was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @to_url = articles_url
    #session[:delete_redirect] = nil
    #if session[:delete_redirect]
    #  @to_url = session[:delete_redirect]
    #else #current page
    #  @to_url = request.protocol + request.host + request.fullpath
    #end

    #@to_url = request.protocol + request.host

    @article = Article.find(params[:id])
    @article.destroy

    respond_to do |format|
      #format.html { redirect_to articles_url }
      format.html { redirect_to @to_url }
      format.json { head :ok }
    end
  end
end
