import {Router} from 'express'
import { Signup } from '../controllers/signup.js';
import { LoginValidation, SignupValidation } from '../Middleware/authValidation.js';
import { OTPverificationMiddleware } from '../Middleware/otpvalidation.js';
import { signupOTPverification } from '../controllers/signupOTPverification.js';
import { login } from '../controllers/login.js';
import { logout } from '../controllers/logout.js';
import { resendotp } from '../controllers/resendotp.js';
import { userAuthMiddleware } from '../Middleware/userAuthMiddleware.js';
import { userProfile } from '../controllers/userprofile.js';

export const userRouter=Router();


userRouter.post('/sendotp',SignupValidation,Signup)
userRouter.post('/verifyOTP',OTPverificationMiddleware,signupOTPverification);
userRouter.post('/resendotp',resendotp)
userRouter.post('/login',LoginValidation,login);
userRouter.post('/logout',logout)

userRouter.post('/getMe',userAuthMiddleware,userProfile)
