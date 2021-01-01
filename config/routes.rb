Rails.application.routes.draw do
  # Other routes before this
  get '*other', to: 'static#index'
end
