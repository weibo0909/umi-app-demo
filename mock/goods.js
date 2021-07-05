let data = [
    {title: '单页面'},
    {title: '管理项目3'}
];
export default {
    'get /api/goods': function (req, res) {
        setTimeout(() => {
            res.json({result: data});
        }, 1000);
    }
};
