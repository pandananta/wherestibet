Wherestibet::Application.routes.draw do
  devise_for :users

  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

  resources :stories, :only => [:index, :create, :new, :show] 

  root :to => 'stories#index'
  match "/about" => "pages#about"
  match "/privacy" => "pages#privacy"
end
