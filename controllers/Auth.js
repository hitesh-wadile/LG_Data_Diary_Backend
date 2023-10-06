const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const OTP = require("../models/OTP");
const Student = require("../models/student");
const Profile = require("../models/personalDetails");
const Parent = require("../models/parentDetails");
const Bank = require("../models/bankDetails");
const Academic = require("../models/academicDetails");
const Engineering = require("../models/engineeringDetails");
const Portfolio = require("../models/portfolio");
const bodyParser = require("body-parser");
const LG = require("../models/LG");
const { defaultProfile } = require("../models/personalDetails");
const { defaultBankDetails } = require("../models/bankDetails")
const { defaultParentDetails } = require("../models/parentDetails")
const { defaultAcademicDetails } = require("../models/academicDetails")
const { defaultEngineeringDetails } = require("../models/engineeringDetails")
const { defaultPortfolio } = require("../models/portfolio");
const { defaultLGdetails } = require("../models/LG");
require("dotenv").config();


exports.studentSignup = async (req, res) => {
    try {
        const {
            firstName,
            middleName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
        } = req.body;

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password do not match. Please try again.",
            });
        }

        // Check if student already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Student already exists. Please sign in to continue.",
            });
        }

        // Find the most recent OTP for the email
        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log(response);

        if (response.length === 0) {
            // OTP not found for the email
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid",
            });
        } else if (otp !== response[0].otp) {
            // Invalid OTP
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        defaultProfile.profilePhoto = `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;

        const profileDetails = await Profile.create(defaultProfile);
        const bankDetails = await Bank.create(defaultBankDetails);
        const parentDetails = await Parent.create(defaultParentDetails);
        const academicDetails = await Academic.create(defaultAcademicDetails);
        const engineeringDetails = await Engineering.create(defaultEngineeringDetails);
        const portfolioDetails = Portfolio.create(defaultPortfolio);
        const LGdetails = LG.create(defaultLGdetails);

        const student = await Student.create({
            firstName,
            middleName,
            lastName,
            email,
            password: hashedPassword,
            accountType: "Student",
            parent: [parentDetails._id],
            personalDetails: profileDetails._id,
            bank: bankDetails._id,
            academic: academicDetails._id,
            engineering: engineeringDetails._id,
            portfolio: portfolioDetails._id,
            LGdetails: LGdetails._id,
        });

        return res.status(200).json({
            success: true,
            student: student,
            message: "Student registered successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Student cannot be registered. Please try again.",
        });
    }
};


exports.login = async (req, res) => {
    try {

        const { email, password } = req.body

        const student = await Student.findOne({ email })

        // If student not found with provided email
        if (!student) {
            return res.status(401).json({
                success: false,
                message: `Student is not Registered with Us Please SignUp to Continue`,
            })
        }

        // Generate JWT token and Compare Password
        if (await bcrypt.compare(password, student.password)) {
            const token = jwt.sign(
                { email: student.email, id: student._id, accountType: student.accountType },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            )

            // Save token to student document in database
            student.token = token
            student.password = undefined
            // Set cookie for token and return success response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                student,
                message: `Student Login Success`,
            })
        } else {
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })
    }
}

exports.sendotp = async (req, res) => {
    try {
        console.log(req.body)
        const email = req.body.email;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required to send OTP',
            });
        }

        const checkstudentPresent = await Student.findOne({ email });

        if (checkstudentPresent) {
            return res.status(401).json({
                success: false,
                message: 'Student already registered',
            });
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        console.log("OTP generated: ", otp);

        let result = await OTP.findOne({ otp: otp });

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            result = await OTP.findOne({ otp: otp });
        }

        const otpPayload = { email, otp };

        const otpBody = await OTP.create(otpPayload);
        
        console.log("OTP Body", otpBody);

        res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Error occurred while sending OTP",
            error: error.message,
        });
    }
};

