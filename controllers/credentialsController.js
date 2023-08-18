import { createToken } from '../util/jwt.js';
import User from "../models/User.js"

const credentialsController = {
    login() {
      return async (req, res) => {
        try {
            const { username, password } = req.body;

            // authentication
            const user = await User.findOne(
                {
                    where: {
                      [Op.and]: [
                        { username: username },
                        { password: password }
                      ]
                    }
                  }
            );
            if (user) {
              // success
              const id_token = createToken({ user_id: user.password });
              res.status(200).json({
                id_token, 
                user_data: user });
            } else {
              // Authentication failed
              res.status(401).json({ message: 'Invalid username or password' });
            }  
          } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
          }
      };
    },
  };
    
  export default credentialsController;