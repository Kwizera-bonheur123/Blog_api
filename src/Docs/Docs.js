// Get all Users
/**
 * @swagger
 * /api/user/getAllUsers:
 *   get:
 *     tags:
 *       - User
 *     description: Returns all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */






// Get all posts
/**
 * @swagger
 * /api/post/select:
 *   get:
 *     tags:
 *       - post
 *     description: Returns all posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */


//Select one post
/**
 * @swagger
 * /api/post/selectById/{id}:
 *   get:
 *     summary: Delete a post post by ID
 *     tags:
 *       - post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: post post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/post_image.jpg
 *                     postTitle:
 *                       type: string
 *                       example: "Title of the post"
 *                     postContent:
 *                       type: string
 *                       example: "Content of the post post"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */





// Delete post by Id

/**
 * @swagger
 * /api/post/delete/{id}:
 *   delete:
 *     summary: Delete a post post by ID
 *     tags:
 *       - post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: post post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/post_image.jpg
 *                     postTitle:
 *                       type: string
 *                       example: "Title of the post"
 *                     postContent:
 *                       type: string
 *                       example: "Content of the post post"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */


/**
 * @swagger
 * /api/user/createUser:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user with profile picture
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the user
 *               lastName:
 *                 type: string
 *                 description: Last name of the user
 *               email:
 *                 type: string
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *               profile:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture (optional)
 *           required:
 *             - firstname
 *             - lastname
 *             - email
 *             - password
 *             - profile
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */



/**
 * @swagger
 * /api/user/userLogin:
 *   post:
 *     tags:
 *       - User
 *     summary: User Login in 
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *           required:
 *             - email
 *             - password
 *     responses:
 *       201:
 *         description: Login successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *       404: 
 *          description: incorrect credentials
 */



/**
 * @swagger
 * tags:
 *   name: post
 *   description: Operations related to posts
 */

/**
 * @swagger
 * /api/post/create:
 *   post:
 *     summary: Create a new post
 *     tags: [post]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               postImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: post created successfully
 *       500:
 *         description: Failed to create a post
 */


/**
 * @swagger
 * /api/post/update/{id}:
 *   put:
 *     summary: Update a post post by ID
 *     tags:
 *       - post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               postImage:
 *                 type: string
 *                 format: binary  
 *     responses:
 *       200:
 *         description: post post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post updated successfully"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */



/**
 * @swagger
 * /api/user/updateUser/{id}:
 *   put:
 *     summary: Update the user's data
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               first:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary  
 *     responses:
 *       200:
 *         description: post post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post updated successfully"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */




/**
 * @swagger
 * /api/post/comment/{id}:
 *   post:
 *     summary: Update the user's data
 *     tags:
 *       - post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string  
 *     responses:
 *       200:
 *         description: post post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post updated successfully"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */


// Delete post by Id

/**
 * @swagger
 * /api/user/deleteUser/{id}:
 *   delete:
 *     summary: Delete a post post by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: post post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "post post deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/post_image.jpg
 *                     postTitle:
 *                       type: string
 *                       example: "Title of the post"
 *                     postContent:
 *                       type: string
 *                       example: "Content of the post post"
 *       404:
 *         description: post post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "post post not found"
 */