class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :product_listings,
        class_name: :Product,
        foreign_key: :owner_id

    has_many :cart_items,
        class_name: :CartItem,
        foreign_key: :user_id

    has_many :authored_reviews,
        class_name: :Review,
        foreign_key: :author_id

    after_initialize :ensure_session_token
    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_sessions_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    private
    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end