Rails.application.routes.draw do
  # Other routes before this
  get '*path', to: 'static#index'
end
