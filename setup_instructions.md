## Week 3 Setup Instructions
Please follow these setup instructions prior to working on the activities in this lesson.

1. To run the React frontend application, open the IDE terminal and run the following commands.

    ```bash
    cd ~/environment/pet-shelter-client
    npm install
    npm run dev
    ```

1. Open the preview of the React application in another browser tab or window. 

1. To configure and deploy the backend with resources from the previous module, open a new terminal window, and run the following commands.

    ```bash
    cd ~/environment/backend/
    sam build
    sam deploy --guided
    ```

1. To configure **sam deploy**, use the following settings. For AWS Region, accept th default; the region should match the one that the lab is provisioned in. The stack name MUST be pets-backend.
    
    <i aria-hidden="true" class="fas fa-sticky-note" style="color:#563377"></i> **Note:** No value means to accept the default by pressing **Enter** or **Return**.
     ```bash
        Stack Name [sam-app]: pets-backend
        AWS Region [us-east-1]: 
        Confirm changes before deploy [y/N]: # Shows resource changes to be deployed and requires a 'Y' to initiate deploy.
        Allow SAM CLI IAM role creation [Y/n]: # AWS SAM needs permission to be able to create roles to connect to the resources in your template.
        Disable rollback [y/N]: # Preserves the state of previously provisioned resources when an operation fails.
        GetPetsLambda has no authentication. Is this okay? [y/N]: y
        Save arguments to configuration file [Y/n]: 
        SAM configuration file [samconfig.toml]: 
        SAM configuration environment [default]: 
     ```

1. In **pet-shelter-client/**, locate the **.env** file and open it.

1. Update **VITE_API_GATEWAY_URL** with the PetsAPI prod stage URL from the outputs generated from your AWS SAM deployment.

    <i aria-hidden="true" class="fas fa-sticky-note" style="color:#563377"></i> **Note:** Ensure that there are no **/** or any other characters at the end of **/prod**.

1. To populate the pets table and create an Amazon Simple Storage Service (Amazon S3) bucket to host the pet images, run the following commands.

    ```bash
    cd ~/environment/backend/scripts
    python populate_pets_table.py
    python create_images_bucket.py
    ```

1. Copy the name of the S3 bucket.

1. To copy the pets images to the new S3 bucket, run the following command. 

    <i aria-hidden="true" class="fas fa-sticky-note" style="color:#563377"></i> **Note:** Replace **S3_BUCKET_NAME** with the name of the S3 bucket that you copied in the previous step.

    ```bash
    aws s3 cp ~/environment/pet-shelter-client/src/assets/ s3://S3_BUCKET_NAME/images/ --recursive
    ```

1. In the AWS Management Console, search for Amazon S3 and find your S3 bucket. 

1. Choose your S3 bucket, choose **/images**, and then select an image. 

1. Copy the selected image's object URL.

1. In the **pet-shelter-client** directory, open the **.env** file, and update the **VITE_PET_IMAGES_BUCKET_URL** value to equal the selected image's object URL. Save the file. 

1. Delete everything after **/images**, ensuring that there are no forward slashes or other characters after **/images**.



[React MIT License](https://github.com/facebook/react?tab=MIT-1-ov-file#readme)

Python is property of the Python Software Foundation (PSF), and React is property of Meta Platforms, Inc. Reference in this lab to any specific commercial product, process, or service, or the use of any trade, firm, or corporation name is provided for informational purposes, and does not constitute endorsement, recommendation, or favoring by Amazon Web Services.
