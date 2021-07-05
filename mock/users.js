let data = new Array(100).fill('').map((item, index) => {
    return {name: `name${index + 1}`, email: `email${index + 1}`, website: `website${index + 1}`, id: index + 1};
});
export default {
    'get /api/users': function (req, res) {
        const {page, limit} = req.query;
        console.log(req);
        setTimeout(() => {
            res.json({
                data: data.filter((item, index) => ((page * limit) <= index) && (index < ((1 + page) * limit)))
            });
        }, 1000);
    }
};
