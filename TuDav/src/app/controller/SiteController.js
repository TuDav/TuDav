

class SiteController {
    intro(req, res, next) {
        res.render('introduce')
    }
    home(req, res, next) {
        res.render('home');
    }
}

module.exports = new SiteController