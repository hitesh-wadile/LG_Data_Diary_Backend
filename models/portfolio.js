const mongoose = require("mongoose");


const activitySchema = new mongoose.Schema({
    activityType: { type: String }, // Type of activity (e.g., Seminar, Workshop, Hackathon, Competition)
    name: { type: String }, 
    date: { type: Date }, 
    organizer: { type: String }, 
    description: { type: String }, 
});


const certificateSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    issueDate: { type: Date, required: true }, 
    description: { type: String }, 
    url: { type: String, required: true }, 
});


const resumeSchema = new mongoose.Schema({
    title: { type: String, required: true },  
    url: { type: String, required: true }, 
});


const projectSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String }, 
    skills: [String], 
    startDate: { type: Date }, 
    endDate: { type: Date }, 
    url: { type: String }, 
});

const portfolioSchema = new mongoose.Schema({
    activities: [activitySchema], // Array  of student activities
    certificates: [certificateSchema], // Array of student certificates
    resumes: [resumeSchema], // Array of student resumes
    projects: [projectSchema], // Array of student projects
});


module.exports = mongoose.model("Portfolio", portfolioSchema);



