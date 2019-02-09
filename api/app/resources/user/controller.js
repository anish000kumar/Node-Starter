
const userController = ({ model: User }) => ({

    async getAll(req, res) {
        const users = await User.find({});
        res.send(users)
    },

    async create(req, res) {
        res.send(req.body)
        const user = await new User(req.body);
        await user.save();
        res.send(user)
    },

    async get(req, res) {
        const user = await User.findById(req.params.userId);
        res.send(user);
    },

    async update(req, res) {
        const user = await User.updateOne({ id: req.params.userId }, req.body);
        res.send(user);

    },

    async destroy(req, res) {
        await User.deleteOne({ id: req.params.userId });
        res.send({
            success: true
        });
    }

})

export default userController;