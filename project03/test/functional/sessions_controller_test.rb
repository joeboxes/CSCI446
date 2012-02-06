require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

  test "should login" do
    richie = users(:one)
    post :create, name: richie.name, password: 'secret'
    assert_redirected_to admin_url
    assert_equal richie.id, session[:user_id]
  end

  test "should fail login" do
    richie = users(:one)
    post :create, name: richie.name, password: 'wrong'
    assert_redirected_to login_url
  end

  test "should logout" do
    delete :destroy
    assert_redirected_to store_url
  end

  #test "should get create" do
  #  get :create
  #  assert_response :success
  #end

  #test "should get destroy" do
  #  get :destroy
  #  assert_response :success
  #end

end
