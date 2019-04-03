class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    
    helper_method :current_user, :ensure_logged_in, :logged_in?

    def login!(user)
        user.reset_sessions_token!
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_sessions_token!
        session[:session_token] = nil
    end

    def current_user
        User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end
end