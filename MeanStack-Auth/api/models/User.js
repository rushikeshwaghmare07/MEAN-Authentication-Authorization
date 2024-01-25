import mongoose, {Schema} from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
            required: false,
            default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dflat%2BAvatar&psig=AOvVaw0x6XHyBq2moA_yAzdJVXmH&ust=1706283840926000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjG7uTw-IMDFQAAAAAdAAAAABAI"
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        roles: {
            type: [Schema.Types.ObjectId],
            required: true,
            ref: "Role"
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);