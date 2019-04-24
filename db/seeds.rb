# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

loremTitles = [
    'Lorem ipsum dolor.', 
    'Morbi vehicula, nibh.', 
    'Mauris eget porta.', 
    'Aliquam id aliquam.', 
    'Nulla placerat eros.', 
    'Nulla vulputate libero.',
    'Nunc vel dolor.',
    'Integer hendrerit blandit.',
    'Cras vel turpis.',
    'Praesent in urna.',
    'Sed condimentum rhoncus.',
    'Nulla mauris felis.',
    'Etiam eget nisi.',
    'Nunc porttitor diam.',
    'Fusce blandit tellus.',
    'Donec metus mi.',
    'Curabitur at placerat libero.',
    'Curabitur id porttitor metus.',
    'Quisque mi nibh, gravida.',
    'Mauris dolor est, pretium.',
    'Aliquam accumsan euismod enim.',
    'Nullam dictum rutrum euismod.',
    'Praesent posuere elit eget.',
    'Integer risus augue, tincidunt.',
    'Aliquam rutrum orci eget.',
    'Donec consequat lacus vitae.'
]

loremBodies = [
    'Nulla maximus risus in augue porta ullamcorper. Mauris in tempor massa. Etiam sed maximus felis. Nulla tincidunt tincidunt diam et vulputate. Cras mattis vel orci a vestibulum. Cras tempor, libero a cursus posuere, urna risus blandit orci, tempus suscipit mauris nibh sit amet nulla. Praesent orci odio, sollicitudin at dui ac, fringilla dictum justo. Phasellus ultricies maximus dictum. Fusce vel viverra dolor. Etiam mollis efficitur lorem, quis faucibus mi ullamcorper a. Pellentesque a mi viverra mi porta dictum non in dui.',
    'Aliquam elementum, arcu quis euismod venenatis, libero elit iaculis urna, eu semper nisi lacus et nibh. In pellentesque sit amet lectus eu interdum. Curabitur sodales dictum vulputate. In feugiat, lorem eleifend faucibus consequat, sem lacus vestibulum mauris, eget semper nulla erat ac dui. Duis tristique in metus et vehicula. Sed in quam ligula. Quisque ultrices sed felis vel tempus. Curabitur vel accumsan nisl, finibus tempus sapien. Sed consectetur tellus id erat mollis interdum. Suspendisse pellentesque nunc quis dui elementum, eget sodales nibh maximus.',
    'Pellentesque ut sapien sem. Phasellus a arcu ullamcorper, convallis eros eget, rhoncus nisl. Nunc posuere, ante consectetur pharetra congue, leo ipsum consectetur lorem, at vehicula nisl nisi non sem. Phasellus nisi neque, aliquet et commodo a, faucibus hendrerit mi. Aliquam feugiat nec lectus eu efficitur. Etiam ultrices nec libero pharetra porttitor. Aenean eleifend mauris nec felis fringilla dictum sit amet eu velit. Integer convallis et lorem a lobortis. Vestibulum in velit eu justo fermentum molestie nec scelerisque felis. Mauris vulputate turpis turpis, eget varius quam congue a.',
    'In dapibus eros id leo gravida, eu dignissim mauris consequat. Nullam turpis ex, tempor id tortor a, viverra tempus risus. Cras congue rhoncus ante, consectetur fringilla lacus viverra sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eget nisl ante. Fusce nisl purus, hendrerit eu libero nec, tempus sollicitudin risus. Duis auctor sapien vel ex molestie vehicula. Morbi purus elit, ornare quis felis sed, consequat mollis velit. Nulla quis sollicitudin tellus. Proin volutpat dui ut libero accumsan pellentesque. Proin molestie orci et eros convallis, nec ullamcorper lectus eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc fringilla quam in tempus tincidunt. Vivamus congue nibh eget libero interdum ornare. Sed porttitor condimentum bibendum.',
    'Etiam commodo quam mauris, vel accumsan neque viverra ullamcorper. Proin egestas, arcu et accumsan condimentum, lectus ligula blandit turpis, a dictum metus libero quis turpis. Integer vitae sagittis nisl, ut tincidunt tortor. Quisque eget rutrum justo. Ut euismod tempus sollicitudin. Ut eu venenatis felis, ac gravida dolor. Sed nec augue vitae mi porta porta.',
    'Nullam nulla nisl, tempor vel erat sed, malesuada semper purus. Vestibulum fermentum sem ut sapien aliquam molestie. Donec laoreet diam nunc, in pretium quam aliquam ut. Nunc sollicitudin nec enim vitae convallis. Morbi facilisis suscipit vulputate. In semper tincidunt massa vel tincidunt. Nullam diam arcu, dictum sit amet ante porta, vestibulum mollis elit. Quisque pretium justo est, ut iaculis nulla porttitor in. Quisque dapibus pulvinar nulla, eu venenatis nunc iaculis in. Morbi sem est, iaculis quis ultrices vel, sollicitudin in tortor. Pellentesque sed libero at lectus faucibus vehicula in quis turpis. Curabitur at tortor dolor. Pellentesque molestie eget metus sed tempor. Aenean laoreet, ante non porta pharetra, elit nunc venenatis lorem, sit amet tincidunt ligula mi at dui.',
    'Donec euismod mattis risus vel ultricies. Vivamus aliquet, turpis eget consequat blandit, orci odio porttitor ipsum, nec luctus lacus nulla vitae erat. Etiam volutpat nec massa eu dignissim. Donec et odio facilisis, pretium risus mollis, imperdiet metus. Morbi sit amet augue nunc. Aenean justo justo, blandit eu iaculis nec, maximus ac elit. Morbi nec tempus erat. Praesent justo metus, gravida id nisl tempus, ultrices cursus orci. Morbi ornare magna quis lacus suscipit, sit amet congue nibh rhoncus. Sed aliquam, nulla in bibendum vulputate, nibh lectus imperdiet felis, in molestie tellus odio vitae leo.',
    'Etiam id est ac sapien tempor sagittis. Quisque accumsan nulla libero, vel hendrerit leo ultricies sit amet. Etiam sit amet interdum nisl, eget rhoncus felis. Pellentesque elementum diam eu metus facilisis egestas. Morbi non gravida dolor, vel sodales nisi. Aliquam finibus urna sed lacus feugiat, id tempus mauris cursus. Nullam ut tellus et odio dapibus venenatis. Sed et libero mi. Etiam turpis turpis, sagittis vel venenatis in, maximus at erat. Duis dapibus ex ac porta hendrerit. Curabitur vitae porta ante. Quisque posuere rhoncus hendrerit. Phasellus aliquet et elit vitae maximus. Sed vel velit sit amet odio porttitor aliquam.',
    'Nullam tempus ultricies efficitur. Curabitur id nunc dui. Nullam at metus nisl. Sed finibus dolor magna, non volutpat arcu auctor in. Aenean finibus enim sed nisl consectetur posuere. Fusce congue vel nisi eget faucibus. In hac habitasse platea dictumst. Duis nec rhoncus turpis. Etiam vitae ligula feugiat, tristique magna sed, aliquet eros. Sed vel finibus mauris, sed interdum urna. Maecenas eleifend sodales turpis id aliquet.',
    'In hac habitasse platea dictumst. Suspendisse posuere non purus gravida varius. Maecenas laoreet lacus augue, nec pharetra tellus eleifend at. Etiam eros risus, condimentum non molestie in, auctor vel enim. Sed ultricies eros a ultricies ultricies. Mauris vel orci ipsum. Aenean fringilla nisi lorem, sit amet rhoncus eros eleifend et. Donec eros odio, aliquet eget leo eu, volutpat pharetra mi. Vivamus bibendum fermentum pulvinar. Praesent cursus lectus id diam suscipit, vel sollicitudin tellus lobortis. In at consectetur turpis. Donec vitae ex mi. Pellentesque ipsum nunc, hendrerit ac risus a, eleifend tempor quam.',
    'Sed fringilla felis purus, eu malesuada lorem consequat ut. Suspendisse egestas libero vel dui sagittis mattis. Aenean ac ante rutrum, iaculis velit scelerisque, placerat ipsum. Vivamus imperdiet mauris eget feugiat volutpat. Fusce ligula augue, tincidunt at tellus non, vehicula scelerisque tellus. In vehicula, odio ut ultricies imperdiet, ligula ex tristique dui, sit amet accumsan augue mauris et tellus. Praesent pellentesque maximus lectus, eget sollicitudin quam luctus accumsan. Duis dui nulla, malesuada ut euismod in, finibus nec neque. Vivamus in ultrices neque, vitae venenatis nisi. Suspendisse tempor pellentesque eros ac condimentum. Proin tristique felis velit, sit amet lacinia mauris suscipit ac.',
    'Vivamus elementum lectus vitae convallis porta. Quisque dapibus volutpat enim id ullamcorper. Donec quis dui in eros maximus ultricies. Etiam ut ex nec quam interdum suscipit. Curabitur id orci porta, congue dolor ac, ornare lorem. Aenean maximus rhoncus lectus, eu sodales mi auctor eu. Curabitur aliquam ultrices pulvinar.',
    'Quisque ornare nunc quis eros pellentesque, in feugiat justo tempor. Aliquam vehicula tortor nec nibh venenatis facilisis. Fusce blandit gravida erat, eu molestie eros bibendum eget. In eleifend, sapien a luctus aliquet, nisl massa porttitor justo, at tempus augue nisl vel sem. Nunc aliquam efficitur urna, sagittis eleifend lacus mollis sed. Cras nec laoreet metus. Morbi viverra erat vitae tortor pretium condimentum. Proin ultricies placerat sem, a dictum dui porta vitae. Morbi volutpat elit diam, eget sagittis velit pulvinar et. Nullam ut luctus nisi. Aenean lectus risus, blandit sed nisl eget, ullamcorper sodales purus. Integer vehicula lorem nunc, eu efficitur felis euismod a.',
    'In malesuada tempus lacinia. Mauris eu elit pulvinar, tristique libero sit amet, placerat leo. Nulla luctus iaculis metus, et molestie dui eleifend vel. In non elit id odio condimentum vestibulum ut et eros. Quisque posuere feugiat purus quis cursus. Aliquam a elementum nisi, ac dignissim mauris. Fusce eu ullamcorper risus. Etiam venenatis porttitor lacus, sed varius velit ultricies ut. Vestibulum blandit in dui at mollis. Duis vitae volutpat mauris. Proin eu quam a justo volutpat varius. Nunc non nibh non mi lacinia luctus. Ut venenatis tempor nunc eu tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam placerat, odio sit amet aliquet interdum, nisi ante varius turpis, id consequat mi mauris sed nisi. Nam cursus massa eros.',
    'Nam vestibulum metus at nibh dignissim, sit amet facilisis libero congue. Integer condimentum sem varius metus euismod, vitae ultricies mi vulputate. Nunc eu erat id nisl auctor rhoncus eu tincidunt augue. Nulla porta elit non eros blandit consectetur. Ut pulvinar ut turpis eleifend finibus. Nam tincidunt orci nibh. Vivamus erat justo, ornare ac gravida congue, consectetur vitae sapien. Aliquam massa erat, sagittis nec odio ac, condimentum ullamcorper augue. Proin luctus ligula sapien, sit amet fringilla risus ultricies sit amet. Pellentesque porta sit amet lectus nec tincidunt. Mauris in efficitur purus, ut dictum neque. Proin feugiat eu enim a pellentesque. Suspendisse et condimentum sapien, at aliquam lorem. Morbi vitae libero nisl. Fusce sed sollicitudin ipsum.',
    'Aenean non venenatis dui. Donec a nulla tellus. Mauris tempor tristique condimentum. Sed malesuada risus orci, sed dapibus purus pellentesque sed. Nam condimentum magna id enim lobortis, a aliquet quam semper. In orci massa, imperdiet ac magna quis, lacinia faucibus metus. Pellentesque eu dolor sed massa tincidunt tempor. Nulla non ex ac ligula finibus sodales vitae ut nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut volutpat ullamcorper neque sit amet lacinia. Nullam id diam porttitor, tincidunt risus in, suscipit leo. Duis molestie rutrum ante, ut sollicitudin est tempor eu. Integer quis velit sed risus molestie interdum et eu odio.',
    'Maecenas placerat hendrerit mi eget feugiat. Integer sit amet purus lorem. Nulla volutpat risus lacus, eu dictum quam sollicitudin sed. Ut porttitor nibh augue, in gravida mi accumsan a. Quisque mauris dolor, lobortis et condimentum et, cursus nec nunc. Etiam et convallis massa. Nulla ac mi porttitor, condimentum erat eget, posuere nulla. Cras sagittis lectus in faucibus cursus. Quisque faucibus auctor ipsum, quis fringilla enim eleifend id. Ut et nisl sed nunc vestibulum pulvinar.',
    'Integer eget dui sed orci vehicula blandit. Phasellus nulla tellus, porttitor quis felis sit amet, gravida lobortis eros. Vestibulum elementum vel lacus sed accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus tortor faucibus feugiat rhoncus. Etiam molestie rutrum ex, vel fringilla leo condimentum ut. Duis id rhoncus enim. Proin ut tellus iaculis, interdum orci ac, auctor urna. Quisque consequat fringilla enim, fermentum accumsan ligula consequat at. Cras eget lorem non eros interdum pharetra. Ut ut quam massa. Praesent finibus vehicula pellentesque. Proin nec aliquet nibh.',
    'Mauris sagittis purus augue, vel gravida magna sagittis at. Ut ac leo eu orci ornare aliquet ac et ante. Sed quis sollicitudin nunc. Nunc quis arcu interdum, euismod quam vel, sodales lectus. Integer a semper ex, in molestie magna. Nam volutpat luctus libero, egestas tincidunt turpis gravida nec. Vestibulum eu nisi eu felis porttitor volutpat. Nulla volutpat, tellus eget dictum luctus, nisi turpis semper augue, id cursus velit elit ac ligula. Morbi efficitur, ipsum non sodales ultrices, elit ipsum tincidunt elit, at suscipit leo massa vel tortor. Suspendisse et tincidunt lorem. Aenean convallis augue eget magna pellentesque, accumsan lobortis urna pharetra. Sed tempus velit eu eros ullamcorper blandit. Ut commodo quam eu orci euismod luctus. Nunc dictum sollicitudin nisi, in accumsan nulla eleifend at. Pellentesque in velit ligula.',
    'Sed sit amet risus sit amet risus blandit viverra. Nunc condimentum finibus orci, a posuere dui iaculis ut. Sed interdum mollis felis quis finibus. Morbi molestie a mi eget tempor. Sed vehicula semper mi. Fusce id maximus velit, in molestie erat. Nunc in accumsan sapien, a hendrerit metus. Vestibulum sit amet mauris metus. Proin nec urna nulla.',
    'Mauris ut vestibulum orci, nec tempus ligula. Praesent ultrices sagittis augue id molestie. Duis dolor nisi, iaculis vel finibus iaculis, facilisis a mauris. Vivamus quis libero velit. Nunc feugiat, eros vel ultrices ultricies, quam ligula posuere quam, sed feugiat massa tellus sed erat. Nunc blandit enim enim. Morbi quis massa dui. Sed nec pretium risus, nec laoreet quam. Donec congue malesuada tortor, in efficitur arcu aliquam a. Curabitur luctus scelerisque massa. Fusce quis est in lacus vestibulum vestibulum sit amet in nisl. Sed pulvinar odio a libero tincidunt imperdiet id et arcu. Ut volutpat felis lacus, consequat eleifend ipsum interdum vitae. Quisque congue sollicitudin fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ornare sed magna a ultricies.',
    'Integer sed ligula lectus. Nunc maximus justo et ante semper, vel vehicula ipsum dapibus. Nam luctus feugiat ante, ac accumsan ante ullamcorper sed. Vestibulum sagittis justo a enim congue consequat. Vestibulum condimentum justo vitae odio malesuada rhoncus. Vivamus consectetur dui quis ligula commodo dictum vitae id metus. Ut in accumsan libero. Phasellus iaculis nulla massa. Suspendisse potenti. Aliquam at lacinia leo. Sed egestas pellentesque velit sed feugiat. Nam tempus arcu eget urna tempor euismod at eu lacus. Praesent iaculis fringilla lectus, accumsan blandit odio ullamcorper vel.',
    'Donec vestibulum, lacus vel pharetra faucibus, sem erat volutpat augue, et vulputate urna ante sed mauris. Nullam vehicula odio nunc, et euismod turpis vehicula ac. Donec faucibus erat urna, quis congue purus bibendum ut. Vivamus scelerisque convallis enim. In convallis sed quam a sollicitudin. Sed non varius velit. Etiam arcu purus, cursus a magna eu, congue lacinia metus. Nulla placerat quis lorem eget mollis. Sed sed auctor nisl, vitae pretium sapien. Duis in neque nibh. Vestibulum euismod leo at pretium tempus. Integer justo nulla, ultrices nec laoreet ut, malesuada ac purus. Sed congue sapien a sapien imperdiet eleifend. In hac habitasse platea dictumst.',
    'Curabitur in ipsum sed mauris malesuada sagittis sed rhoncus sapien. Nulla sed varius orci, ut pretium nunc. Nullam porttitor lorem vel ante sodales, eget cursus enim laoreet. Donec tellus neque, fringilla eget posuere at, condimentum accumsan sem. Nam aliquet volutpat enim, non ultrices purus elementum vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at erat sapien. In nisi velit, luctus vitae vestibulum ut, finibus quis sapien. Proin volutpat, felis sit amet sagittis facilisis, erat urna porta sem, vel venenatis sapien erat quis enim. Nulla facilisi. Nam vestibulum, est nec aliquam porttitor, enim turpis viverra nulla, quis luctus tellus urna sit amet massa. Integer feugiat eu augue non porttitor.',
    'Quisque accumsan dignissim nulla sit amet tempor. Mauris sit amet lectus vel magna fringilla laoreet. Donec dolor est, efficitur vel turpis et, sagittis scelerisque dolor. Quisque sodales ligula augue, ut elementum est rhoncus eget. Aenean feugiat tortor nec elit tristique placerat. Donec ut egestas erat. Pellentesque semper at quam id rutrum.',
    'Maecenas metus purus, congue eget vulputate ut, fermentum et neque. Pellentesque accumsan accumsan tortor, nec dictum orci ullamcorper et. Donec non sagittis metus, id rhoncus tellus. Maecenas nec varius orci. Aenean fermentum rhoncus maximus. In interdum ornare felis, nec ultrices lacus auctor non. Morbi non libero vitae augue facilisis viverra sit amet in augue. Nam efficitur dolor augue, dapibus lobortis metus porta eget.',
    'Fusce mi turpis, mollis in maximus ut, faucibus vel nisl. Phasellus vitae nisl dignissim lorem finibus interdum. Cras interdum fermentum magna elementum venenatis. Integer tempus metus magna, eget facilisis velit pellentesque sodales. Integer venenatis, nunc non malesuada gravida, ante dolor maximus magna, sit amet cursus augue felis in risus. Morbi vitae viverra orci. Suspendisse eget sem dapibus, facilisis est eu, efficitur massa.',
    'Maecenas vitae tristique enim, rutrum sollicitudin libero. Nunc sit amet porttitor justo. Aliquam erat volutpat. Donec elementum nisl lacus, et ullamcorper velit aliquet ut. Donec elementum massa vel justo porttitor, consequat ultricies velit cursus. Phasellus magna neque, lobortis id risus non, vehicula efficitur mauris. Mauris quis ex orci. In viverra dolor augue, eu facilisis erat efficitur ut. Donec interdum ullamcorper nibh et auctor. Morbi auctor lorem ipsum, at blandit leo elementum non. Phasellus accumsan sagittis gravida.',
    'Praesent dapibus mollis auctor. Suspendisse potenti. Nullam viverra felis felis, a sollicitudin nunc bibendum ac. Nam ultrices sapien ut nisi sollicitudin, et accumsan lorem euismod. Fusce ut scelerisque odio. Quisque gravida neque sed libero porta, sit amet aliquet nisi pulvinar. Duis eu orci laoreet augue rhoncus maximus. Nunc arcu ex, finibus quis dapibus ut, viverra quis sem. Nullam gravida, nisl in cursus hendrerit, purus purus auctor massa, id dictum lorem nisl congue metus. Donec vel posuere ante. Sed pellentesque venenatis feugiat. Praesent tristique lorem non lorem viverra molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam quis fermentum erat. Nam elit neque, suscipit quis nisl in, pulvinar accumsan diam.',
    'Praesent fermentum est quam, in pretium orci elementum ac. Curabitur tellus sem, pretium eu magna sit amet, mattis dignissim diam. Aenean non arcu nulla. Fusce eget dui sit amet risus sodales bibendum. Nullam lobortis velit mi, in blandit lacus laoreet id. Proin dapibus, enim at rhoncus congue, est libero efficitur lectus, ac convallis neque lectus quis eros. Phasellus maximus lobortis ex id suscipit. Duis blandit lacus quam, sit amet tempus tortor tempor vitae. Nullam vitae justo fringilla, sodales ligula ut, laoreet eros.'
]

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
p11 = Product.create(title: 'Dog Pajamas', owner_id: b.id, price: 21.99, description: loremBodies.sample)
f = Product.create(title: 'Snake Bandana', owner_id: a.id, price: 2099.99, 
    description: "Add a retro pop of color to any of your casual outfits with this bandana. 
    With the classic paisley pattern, this set of two bandanas lets you decide if 
    you want to go with red or blue, so you can be sure that you get the ideal look each 
    time. Size: One Size. Material: Cotton ")
p13 = Product.create(title: 'Dog Headphones', owner_id: e.id, price: 199.99, description: loremBodies.sample)
g = Product.create(title: 'Horse Hat', owner_id: b.id, price: 99.99, 
    description: 'A woven wide brim fedora with a faux leather buckle strap. 
    Content + Care- Shell 1: 100% wool- Shell 2: 100% polyurethane- Other contents: 
    100% polyvinyl chlorideSize + Fit- Circumference: 21.5%22- Brim: 3.5%22')
h = Product.create(title: 'Panda Beanie', owner_id: c.id, price: 9.99, 
    description: 'This stocking hat is made of 100% acrylic with a logo label on the front. 
    This classic beanie provides comfort and warmth so you can guarantee to keep the 
    cold out during any winter adventure.')
p12 = Product.create(title: 'Dog Glasses', owner_id: b.id, price: 299.99, description: loremBodies.sample)
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
p1 = Product.create(title: 'Darth Vader Costume', owner_id: e.id, price: 19.99, description: loremBodies.sample)
p2 = Product.create(title: 'Ironman Costume', owner_id: b.id, price: 29.99, description: loremBodies.sample)
p10 = Product.create(title: 'Tiger Suit', owner_id: a.id, price: 3299.99, description: loremBodies.sample)
p4 = Product.create(title: 'Pizza Cape', owner_id: c.id, price: 8.99, description: loremBodies.sample)
p5 = Product.create(title: 'Burrito Outfit', owner_id: a.id, price: 13.99, description: loremBodies.sample)
p6 = Product.create(title: 'Pirate Costume', owner_id: c.id, price: 23.99, description: loremBodies.sample)
p3 = Product.create(title: 'Captain America Costume', owner_id: e.id, price: 13.99, description: loremBodies.sample)
p7 = Product.create(title: 'Lion Mane Costume', owner_id: a.id, price: 12.99, description: loremBodies.sample)
p8 = Product.create(title: 'Sushi Costume', owner_id: b.id, price: 42.99, description: loremBodies.sample)
p9 = Product.create(title: 'Donut Hat', owner_id: b.id, price: 32.99, description: loremBodies.sample)


# PRODUCT PICS
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

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/vader-dog.jpeg')
p1.pictures.attach(io: x, filename: 'vader-dog.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/vader-dog.jpeg')
p1.pictures.attach(io: x, filename: 'vader-dog2.jpeg')


x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/iron-dog.jpeg')
p2.pictures.attach(io: x, filename: 'iron-dog.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/iron-dog2.jpeg')
p2.pictures.attach(io: x, filename: 'iron-dog2.jpeg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/ca-dog.jpeg')
p3.pictures.attach(io: x, filename: 'ca-dog.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/ca-dog2.jpeg')
p3.pictures.attach(io: x, filename: 'ca-dog2.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/ca-dog3.jpeg')
p3.pictures.attach(io: x, filename: 'ca-dog3.jpeg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pizza-dog.jpg')
p4.pictures.attach(io: x, filename: 'pizza-dog.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pizza-dog2.jpg')
p4.pictures.attach(io: x, filename: 'pizza-dog2.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/burrito-dog.jpg')
p5.pictures.attach(io: x, filename: 'burrito-dog.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/burrito-dog2.jpg')
p5.pictures.attach(io: x, filename: 'burrito-dog2.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pirate-cat.jpg')
p6.pictures.attach(io: x, filename: 'pirate-cat.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pirate-cat2.jpeg')
p6.pictures.attach(io: x, filename: 'pirate-cat2.jpeg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/pirate-cat3.jpg')
p6.pictures.attach(io: x, filename: 'pirate-cat3.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/lion-costume.jpg')
p7.pictures.attach(io: x, filename: 'lion-costume.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/lion-costume2.jpg')
p7.pictures.attach(io: x, filename: 'lion-costume2.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/lion-costume3.jpg')
p7.pictures.attach(io: x, filename: 'lion-costume3.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/sushi-cat.jpg')
p8.pictures.attach(io: x, filename: 'sushi-cat.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/sushi-cat2.jpg')
p8.pictures.attach(io: x, filename: 'sushi-cat2.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/donut-cat.jpg')
p9.pictures.attach(io: x, filename: 'donut-cat.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/donut-cat2.jpg')
p9.pictures.attach(io: x, filename: 'donut-cat2.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/donut-cat3.jpg')
p9.pictures.attach(io: x, filename: 'donut-cat3.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/tiger-suit.jpg')
p10.pictures.attach(io: x, filename: 'tiger-suit.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/tiger-suit2.jpg')
p10.pictures.attach(io: x, filename: 'tiger-suit2.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/dog-pj.jpg')
p11.pictures.attach(io: x, filename: 'dog-pj.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/dog-pj2.jpg')
p11.pictures.attach(io: x, filename: 'dog-pj2.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/dog-glasses.jpg')
p12.pictures.attach(io: x, filename: 'dog-glasses.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/dog-glasses2.jpg')
p12.pictures.attach(io: x, filename: 'dog-glasses2.jpg')

x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/dog-headphones.jpg')
p13.pictures.attach(io: x, filename: 'dog-headphones.jpg')
x = open('https://s3.amazonaws.com/aa-petsy-public/productpics/dog-headphones2.jpg')
p13.pictures.attach(io: x, filename: 'dog-headphones2.jpg')

# CART ITEMS
CartItem.create(user_id: a.id, product_id: h.id, quantity: 3)
CartItem.create(user_id: b.id, product_id: i.id, quantity: 4)
CartItem.create(user_id: c.id, product_id: j.id, quantity: 2)
CartItem.create(user_id: d.id, product_id: h.id, quantity: 7)
CartItem.create(user_id: e.id, product_id: f.id, quantity: 5)
CartItem.create(user_id: b.id, product_id: f.id, quantity: 1)


# REVIEWS
# Review.create(author_id: a.id, product_id: f.id, title: 'Best snake bandana ever', body: 'My snake has never been happier', rating: 5)
# Review.create(author_id: a.id, product_id: g.id, title: 'Would not buy again', body: 'This hat was ripped out of the box', rating: 1)
# Review.create(author_id: a.id, product_id: h.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: i.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: j.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p1.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p2.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p3.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p4.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p5.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p6.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p7.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p8.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p9.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p10.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p11.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p12.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
# Review.create(author_id: a.id, product_id: p13.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)

Review.create(author_id: b.id, product_id: h.id, title: 'My panda loves his beanie!', body: 'My panda loves his new beanie but my shipment was extremely late.', rating: 3)
Review.create(author_id: b.id, product_id: f.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: g.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: i.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: j.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p1.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p2.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p3.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p4.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p5.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p6.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p7.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p8.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p9.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p10.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p11.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p12.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: b.id, product_id: p13.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)

Review.create(author_id: c.id, product_id: i.id, title: 'Great value', body: "You won't find better for this price", rating: 4)
Review.create(author_id: c.id, product_id: f.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: g.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: h.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: j.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p1.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p2.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p3.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p4.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p5.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p6.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p7.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p8.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p9.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p10.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p11.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p12.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: c.id, product_id: p13.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)

Review.create(author_id: d.id, product_id: j.id, title: 'I love this jacket!', body: 'Keeps little bobby warm in the winter', rating: 5)
Review.create(author_id: d.id, product_id: f.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: g.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: h.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: i.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p1.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p2.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p3.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p4.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p5.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p6.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p7.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p8.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p9.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p10.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p11.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p12.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: d.id, product_id: p13.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)

Review.create(author_id: e.id, product_id: g.id, title: 'Do not buy this!', body: 'My horse had a photoshoot and her hat was all ripped. Extremely disappointed.', rating: 1)
Review.create(author_id: e.id, product_id: f.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: h.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: i.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: j.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p1.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p2.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p3.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p4.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p5.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p6.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p7.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p8.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p9.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p10.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p11.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p12.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)
Review.create(author_id: e.id, product_id: p13.id, title: loremTitles.sample, body: loremBodies.sample, rating: ([1, 2, 3, 4, 5]).sample)