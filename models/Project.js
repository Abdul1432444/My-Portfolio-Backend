import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/600x400?text=Project+Image',
    },
    techStack: [{
        type: String,
    }],
    liveDemoLink: {
        type: String,
    },
    githubLink: {
        type: String,
    },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
