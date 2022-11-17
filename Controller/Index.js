const User = require('../Model/Index');

exports.RewardUsersReferrer = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const CurrentUserData = await User.findById(userId);
        if (CurrentUserData) {
            if (isPaymentMade === false) {
                const ReferredUser = CurrentUserData.ReferredUser;
                const UpdatedCurrentUserData = await User.findByIdAndUpdate(CurrentUserData._id, { isPaymentMade: true }, { new: true });
                let ReferredUserData = await User.findById(ReferredUser);
                let LastTotalEarnings = ReferredUserData.TotalEarnings;
                const UpdatedReferredUserData = await User.findByIdAndUpdate(ReferredUser, { TotalEarnings: +LastTotalEarnings + 10 }, { new: true });
                res.json({ status: 200, data: { CurrentUser: UpdatedCurrentUserData, ReferredUser: UpdatedReferredUserData } });
            } else {
                res.json({ status: 207, data: {}, error: "User Already Rewarded!" });
            }
        } else {
            res.json({ status: 207, data: {}, error: "No User Exists with this userId!" });
        };
    } catch (error) {
        console.log(error);
        res.json({ status: 207, data: {}, error: error.message });
    };
};