import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
        <div className ="container blog">

            <h3 className='py-3'>Difference between authorization and authentication ?</h3>
            <p className='w-50 fs-5'> -Authentication is the process of confirming the authenticity of 
                attributes related to a single piece of data, as claimed by an actual entity.
                It Checks the details of an entity with a view of identifying the entity.
                Authorization efers to the task/process related to specifying access privileges
                 and rights to the resources connected with data security.Checks the privileges of
                  a user before providing access.
                </p>
            <h3 className='py-3'>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='w-50 fs-5'> -Firebase manages all data real-time in the database.<br></br> we can easily store user information.there are Parse,Back4app,Backendless,pubnub,kumulos,Hoddie,Appwrite,Heroku,Nhost and many others
                </p>
            <h3 className='py-3'>What other services does firebase provide other than authentication ?</h3>
            <p className='w-50 fs-5'> -Firebase Provide Cloud Firestore Cloud Functions ,Authentication ,Hosting ,Cloud Storage ,Google Analytics ,Predictions ,Cloud Messaging ,Dynamic Links ,Remote Config etc.
            Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance
                </p>
        </div>
    );
};

export default Blog;