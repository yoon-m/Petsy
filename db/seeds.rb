# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Review.destroy_all
CartItem.destroy_all
Product.destroy_all
User.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')
ApplicationRecord.connection.reset_pk_sequence!('reviews')
ApplicationRecord.connection.reset_pk_sequence!('cart_items')

# USERS
a = User.create(first_name: 'Michael', email: 'mike@gmail.com', password: 'starwars')
b = User.create(first_name: 'Marcus', email: 'mcavi@gmail.com', password: 'starwars')
c = User.create(first_name: 'Linda', email: 'linda@gmail.com', password: 'starwars')
d = User.create(first_name: 'Nick', email: 'nick@gmail.com', password: 'starwars')
e = User.create(first_name: 'Rong', email: 'rong@gmail.com', password: 'starwars')

# PRODUCTS
f = Product.create(title: 'Snake Bandana', owner_id: a.id, price: 2099.99, 
    description: "Add a retro pop of color to any of your casual outfits with this bandana. 
    With the classic paisley pattern, this set of two bandanas lets you decide if 
    you want to go with red or blue, so you can be sure that you get the ideal look each 
    time. Size: One Size. Material: Cotton ")
g = Product.create(title: 'Horse Hat', owner_id: b.id, price: 99.99, 
    description: 'A woven wide brim fedora with a faux leather buckle strap. 
    Content + Care- Shell 1: 100% wool- Shell 2: 100% polyurethane- Other contents: 
    100% polyvinyl chlorideSize + Fit- Circumference: 21.5%22- Brim: 3.5%22')
h = Product.create(title: 'Panda Beanie', owner_id: c.id, price: 9.99, 
    description: 'This stocking hat is made of 100% acrylic with a logo label on the front. 
    This classic beanie provides comfort and warmth so you can guarantee to keep the 
    cold out during any winter adventure.')
i = Product.create(title: 'Cat Necklace', owner_id: d.id, price: 3999.99, 
    description: 'This breathtaking pendant features a magnificent 8 mm freshwater 
    pearl...perfectly round, irresistibly luminous and totally breathtaking. Suspended 
    within gleaming 14kt gold-plated ribbons that gracefully embrace the pearl, 
    this natural beauty is absolutely exquisite. To add even more appeal to this glorious 
    piece, six dazzling diamonds lend a glittering light for the perfect, dramatic 
    finishing touch. A matching 18", 14kt gold-plated necklace provides the ideal showcase 
    for this stylish and romantic design.')
j = Product.create(title: 'Bird Jacket', owner_id: a.id, price: 199.99, 
    description: "A walking and hiking classic updated for the new season, The Resolve 
    2 Jacket is your ultimate no-fuss protective layer. Fully waterproof and seam sealed the 
    Resolve 2 is made from DryVent fabric which repel rain and allows heat vapour to pass 
    through its membrane during up-hill climbs. Technically superior the Resolve 2 has an 
    adjustable, stow-away hood, a Velcro storm flap and an internal cinch cord for a 
    personally tailored feeling fit.")


x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/snakebandana.jpg')
f.pictures.attach(io: x, filename: 'snakebandana.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/snakebandana2.jpg')
f.pictures.attach(io: x, filename: 'snakebandana2.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/snakebandana3.jpg')
f.pictures.attach(io: x, filename: 'snakebandana3.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/snakebandana4.jpg')
f.pictures.attach(io: x, filename: 'snakebandana4.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/horsehat.jpg')
g.pictures.attach(io: x, filename: 'horsehat.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/horsehat2.jpeg')
g.pictures.attach(io: x, filename: 'horsehat2.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/horsehat3.jpg')
g.pictures.attach(io: x, filename: 'horsehat3.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/horsehat4.jpeg')
g.pictures.attach(io: x, filename: 'horsehat4.jpeg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pandabeanie.jpg')
h.pictures.attach(io: x, filename: 'pandabeanie.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pandabeanie2.jpg')
h.pictures.attach(io: x, filename: 'pandabeanie2.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pandabeanie3.jpeg')
h.pictures.attach(io: x, filename: 'pandabeanie3.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pandabeanie4.jpg')
h.pictures.attach(io: x, filename: 'pandabeanie4.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/catnecklace.jpg')
i.pictures.attach(io: x, filename: 'catnecklace.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/catnecklace2.jpeg')
i.pictures.attach(io: x, filename: 'catnecklace2.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/catnecklace3.jpeg')
i.pictures.attach(io: x, filename: 'catnecklace3.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/catnecklace4.jpg')
i.pictures.attach(io: x, filename: 'catnecklace4.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/birdjacket.jpeg')
j.pictures.attach(io: x, filename: 'birdjacket.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/birdjacket2.jpeg')
j.pictures.attach(io: x, filename: 'birdjacket2.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/birdjacket3.jpeg')
j.pictures.attach(io: x, filename: 'birdjacket3.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/birdjacket4.jpeg')
j.pictures.attach(io: x, filename: 'birdjacket4.jpeg')


CartItem.create(user_id: a.id, product_id: h.id, quantity: 3)
CartItem.create(user_id: b.id, product_id: i.id, quantity: 4)
CartItem.create(user_id: c.id, product_id: j.id, quantity: 2)
CartItem.create(user_id: d.id, product_id: h.id, quantity: 7)
CartItem.create(user_id: e.id, product_id: f.id, quantity: 5)
CartItem.create(user_id: b.id, product_id: f.id, quantity: 1)

Review.create(author_id: a.id, product_id: f.id, title: 'Best snake bandana ever', body: 'My snake has never been happier', rating: 5)
Review.create(author_id: a.id, product_id: g.id, title: 'Would not buy again', body: 'This hat was ripped out of the box', rating: 1)
Review.create(author_id: b.id, product_id: h.id, title: 'My panda loves his beanie!', body: 'My panda loves his new beanie but my shipment was extremely late.', rating: 3)
Review.create(author_id: c.id, product_id: i.id, title: 'Great value', body: "You won't find better for this price", rating: 4)
Review.create(author_id: d.id, product_id: j.id, title: 'I love this jacket!', body: 'Keeps little bobby warm in the winter', rating: 5)
Review.create(author_id: e.id, product_id: g.id, title: 'Do not buy this!', body: 'My horse had a photoshoot and her hat was all ripped. Extremely disappointed.', rating: 1)

