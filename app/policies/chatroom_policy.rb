class ChatroomPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(user_one: user).or(scope.where(user_two: user))
    end
  end

  def show?
    true
  end

  def index?
    true
  end

  def create?
    true
  end

  def new?
    create?
  end

  def update?
    false
  end

  def edit?
    update?
  end

  def destroy?
    true
  end
end
