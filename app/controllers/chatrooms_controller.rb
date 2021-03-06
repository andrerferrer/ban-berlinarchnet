class ChatroomsController < ApplicationController
  before_action :disabled_footer, only: [:index, :show]
  def index
    @chatrooms = policy_scope(Chatroom)
  end

  def show
    @chatrooms = policy_scope(Chatroom)
    @chatroom = Chatroom.find(params[:id])
    authorize @chatroom
    @message = Message.new
  end

  def create
    @chatroom = Chatroom.new
    @chatroom.user_one = current_user
    @chatroom.user_two = User.find(params[:user_id])
    @chatroom.save
    redirect_to chatroom_path(@chatroom)
    authorize @chatroom
  end
end
