var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');
var Product = require('../models/product');
var AddProduct = require('../models/addProduct');
var Gaming = require('../models/gaming');
var Mobile  = require('../models/mobile');
var Book = require('../models/book');
var Electronic = require('../models/electronic');
var Order = require('../models/order');


//GET home page.
router.get('/', function(req, res, next) {  
  	res.render('shop/index');
  });

router.get('/categories/game',function(req,res,next){
   Product.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/game',{products: productChunks});
   });
});

router.get('/categories/books',function(req,res,next){
   Book.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/books',{books: productChunks});
   });
});

router.get('/categories/elec',function(req,res,next){
   Electronic.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/elec',{electronics: productChunks});
   });
});

router.get('/categories/gaming',function(req,res,next){
   Gaming.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/gaming',{gamings: productChunks});
   });
});

router.get('/categories/mobile',function(req,res,next){
   Mobile.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/mobile',{mobiles: productChunks});
   });
});

router.get('/details/mob-detail/:id', function(req, res){
  var mobId = req.params.id;

  Mobile.findById(mobId, function(err, mobile){
    if(err) {
      return res.redirect('categories/mobile')
    }
      res.render('details/mob-detail');
  });
});

router.get('/categories/recently-added',function(req,res,next){
   AddProduct.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/recently-added',{addproducts: productChunks});
   });
});


router.get('/add-to-cart/:id', function(req,res,next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
   Book.findById(productId, function(err, book){
      if (err){
         return res.redirect('/');
      }
      cart.add(book, book.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/books');
    });
});

router.get('/add-to-cart2/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Product.findById(productsId, function(err, product){
      if (err){
         return res.redirect('/');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/game');
    });
 });
router.get('/add-to-cart3/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Electronic.findById(productsId, function(err, electronic){
      if (err){
         return res.redirect('/');
      }
      cart.add(electronic, electronic.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/elec');
    });
 });

router.get('/add-to-cart4/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Gaming.findById(productsId, function(err, gaming){
      if (err){
         return res.redirect('/');
      }
      cart.add(gaming, gaming.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/gaming');
    });
 });

router.get('/add-to-cart5/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Mobile.findById(productsId, function(err, mobile){
      if (err){
         return res.redirect('/');
      }
      cart.add(mobile, mobile.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/mobile');
    });
 });

router.get('/add-to-cart6/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   AddProduct.findById(productsId, function(err, addproduct){
      if (err){
         return res.redirect('/');
      }
      cart.add(addproduct, addproduct.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/recently-added');
    });
 });

router.get('/remove/:id',function(req,res,next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req,res,next){
    if(!req.session.cart) {
        return res.render('shop/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/add-a-product',function(req,res,next){
    res.render('shop/add-a-product');
});

router.post('/add-a-product',function(req,res,next){
    var addproduct = new AddProduct({
        category: req.body.category,
        title: req.body.title,
        imagePath: req.body.imagePath,
        price: req.body.price,
        description: req.body.description
    });
    addproduct.save(function(err,result){
        res.redirect('/user/profile');
    });
});


router.get('/checkout',isLoggedIn, function(req,res,next){
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout',{total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout',isLoggedIn,function(req,res,next){
    if(!req.session.cart) {
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
    "sk_test_wBl869tG5uKEqyGzu7xvJi8O"
   );

  stripe.charges.create({
  amount: cart.totalPrice * 100,
  currency: "inr",
  source: req.body.stripeToken, // obtained with Stripe.js
  description: "Test Charge"
}, function(err, charge) {
  if(err){
    req.flash('error', err.message);
    return res.redirect('/checkout');
  }
    var order = new Order({
    user: req.user,
    cart: cart,
    address: req.body.address,
    name: req.body.name,
    paymentId: charge.id
  });
  order.save(function(err,result){
  req.flash('success', 'Successfully bought the product!');
  req.session.cart = null;
  res.redirect('/user/profile');
  });
});
});
module.exports = router;

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}