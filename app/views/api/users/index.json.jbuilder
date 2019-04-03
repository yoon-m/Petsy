@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :first_name
    end
end