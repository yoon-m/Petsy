# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all
CartItem.destroy_all

a = User.create(first_name: 'Michael', email: 'mike@gmail.com', password: 'starwars')
b = User.create(first_name: 'Marcus', email: 'mcavi@gmail.com', password: 'starwars')
c = User.create(first_name: 'Linda', email: 'linda@gmail.com', password: 'starwars')
d = User.create(first_name: 'Nick', email: 'nick@gmail.com', password: 'starwars')
e = User.create(first_name: 'Rong', email: 'rong@gmail.com', password: 'starwars')

f = Product.create(title: 'snake bandana', owner_id: a.id, price: 2099.99, description: 'amazing')
g = Product.create(title: 'horse hat', owner_id: b.id, price: 99.99, description: 'nice')
h = Product.create(title: 'panda beanie', owner_id: c.id, price: 9.99, description: 'looks cute')
i = Product.create(title: 'cat necklace', owner_id: d.id, price: 3999.99, description: 'meh')
j = Product.create(title: 'bird jacket', owner_id: a.id, price: 199.99, description: 'awesome')

CartItem.create(user_id: a.id, product_id: h.id)
CartItem.create(user_id: b.id, product_id: i.id)
CartItem.create(user_id: c.id, product_id: j.id)
CartItem.create(user_id: d.id, product_id: h.id)
CartItem.create(user_id: e.id, product_id: f.id)
CartItem.create(user_id: b.id, product_id: f.id)