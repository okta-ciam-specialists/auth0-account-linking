# React Authentication on Vercel

This Typescript template demonstrates **how to implement user authentication** in React applications using Auth0 + Typescript + Material UI components. _This template uses the React Router **6** library._

This template is based on a code sample from the ["Auth0 Developer Center"](https://developer.auth0.com/resources/code-samples/spa/react), a place where you can explore the authentication and authorization features of the Auth0 Identity Platform.

To get started with deploying, click **Deploy**...

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fokta-ciam-specialists%2Fauth0-account-linking&env=VITE_AUTH0_DOMAIN,VITE_AUTH0_CLIENT_ID&envDescription=Required%20Auth0%20values.%20Additional%20optional%20variables%20can%20be%20set%20after%20deployment.%20See%20documentation%20for%20more%20information.&envLink=https%3A%2F%2Fgithub.com%2Fokta-ciam-specialists%2Fauth0-account-linking%3Ftab%3Dreadme-ov-file%23environment-variables&project-name=auth0-react-typescript&repository-name=auth0-react-typescript&redirect-url=https%3A%2F%2Fgithub.com%2Fokta-ciam-specialists%2Fauth0-account-linking%2Ftree%2Fmain%3Ftab%3Dreadme-ov-file%23react-authentication-on-vercel&demo-title=Auth0%20React%20Typescript&demo-description=A%20React%20Typescript%20template%20showcasing%20how%20to%20implement%20Auth0%20with%20optional%20MFA%20capabilities.&demo-url=https%3A%2F%2Fauth0-ai.atko.rocks&demo-image=https%3A%2F%2Fvercel.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fimages.ctfassets.net%252Fe5382hct74si%252F7nPSny8D50VKSwshwKKNsh%252F95b29fe673d56d27a648b0a0430668ab%252Fget-started-auth0-react_-_Dan_Arias.png%26w%3D1920%26q%3D75%26dpl%3Ddpl_AirmFi5VViJgQ6EoYmRAEqFWytUN)

## Quick Auth0 Set Up

> [!CAUTION]
> Yuu will need an Auth0 account in order to proceed.
>
> If you have not signed up for an Auth0 account [do so now](https://auth0.com/signup?utm_source=partner&utm_medium=vercel&utm_campaign=2023-03%7CINB-ORG%7CVercel-Auth0-SignupUserCreationForm-SU&ocid=7014z000000zJItAAM-aPA4z0000008OZeGAM&utm_id=aNK4z000000blT4GAI)!
>

Next, you'll connect your Single-Page Application (SPA) with Auth0. You'll need to create an application registration in the Auth0 Dashboard and get two configuration values: the **Auth0 Domain** and the **Auth0 Client ID**.

### Get the Auth0 domain and client ID

- Open the [Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **Create Application** button and fill out the form with the following values:
  - **Name**: `React Authentication on Vercel` _(or whatever you want)_
  - **Application Type**: `Single Page Web Applications`
- Click on the **Create** button.

> [!TIP]
> See the [Register Applications](https://auth0.com/docs/applications/set-up-an-application) documentation for more details.

An Auth0 Application page loads up.

Click on the **"Settings"** tab of your Auth0 Application page, locate the **"Application URIs"** section, and fill in the following values:

- **Allowed Callback URLs**: `https://*.vercel.app/callback, http://localhost:3000/callback`
- **Allowed Logout URLs**: `https://*.vercel.app, http://localhost:3000`
- **Allowed Web Origins**: `https://*.vercel.app, http://localhost:3000`

> [!TIP]
> While not required, we recommend you replace `https://*.vercel.app` with your _actual_ Vercel deploy URL, once you have deployed the app, for better security.**
>

Scroll down and click the **"Save Changes"** button.

Next, locate the **"Basic Information"** section. You will need the **"Domain"** and **"Client ID"** values to deploy this template correctly.

![Auth0 application settings to enable user authentication](https://cdn.auth0.com/blog/developer-hub/dashboard/auth0-spa-configuration.png)

Once you click the "Deploy" button, the Vercel deploy workflow will show up. On the **"Configure Project"** section, ensure that you use the following values for the **"Required Environment Variables"**:

### Environment Variables
<table>
  <thead>
    <tr>
      <th>Vercel</th>
      <th></th>
      <th>Auth0</th>
      <th></th>
    </tr>
  </thead>
  <tr>
    <td>
      <code>VITE_AUTH0_DOMAIN</code>
    </td>
    <td style="font-size: 10px; color: red; text-transform: uppercase">
      required
    </td>
    <td>
      <b>Domain</b>
    </td>
    <td>
      Found in your application's settings or your brand settings (if using custom). <em>If you have <a href="https://auth0.com/docs/customize/custom-domains">configured a custom domain</a>, use that value instead.</em>
      <br/><sub>*See <a href="https://auth0.com/docs/get-started/applications/application-settings#basic-information">here</a> for more information.</sub>
    </td>
  </tr>
  <tr>
    <td>
      <code>VITE_AUTH0_CLIENT_ID</code>
    </td>
    <td style="font-size: 10px; color: red; text-transform: uppercase">
      required
    </td>
    <td>
      <b>Client ID</b>
    </td>
    <td>
      Found in your application's settings.
    </td>
  </tr>
  <tr>
    <td>
      <code>VITE_AUTH0_MANAGEMENT_API_DOMAIN</code>
    </td>
    <td style="font-size: 10px; color: gray; text-transform: uppercase">
      optional
    </td>
    <td>
      <b>Domain</b>
    </td>
    <td>
      Found in your application's settings.
    </td>
  </tr>
  <tr>
    <td>
      <code>VITE_MFA_ENABLED</code>
    </td>
    <td style="font-size: 10px; color: gray; text-transform: uppercase">
      optional
    </td>
    <td>
      <b>Domain</b>
    </td>
    <td>
      Found in your application's settings.
      <br/>
      <sub><em>Default value: </em><code>false</code></sub>
    </td>
  </tr>
</table>

> [!CAUTION]
> `VITE_MFA_ENABLED` will not have any effect unless you also setup the necessary Actions and also configure them to use `acr_values`.
>
> Check out [this guide](https://auth0.com/docs/secure/multi-factor-authentication/adaptive-mfa/customize-adaptive-mfa#action-templates) for more information on using Actions to manage MFA.
> Check out [this guide](https://auth0.com/docs/secure/multi-factor-authentication/step-up-authentication/configure-step-up-authentication-for-web-apps#create-an-action) for more information on how to use `acr_values`.
>
> <span style="color: red; font-weight: bold; font-style: italic">Without the proper action code this configuration will have no effect on your user experience!</span>

## After Deploy

> [!TIP]
> **Remember to replace `https://*.vercel.app` with your Vercel deploy URL in the Auth0 application settings!**
>

### Use the React Sample Application

Your Vercel deploy URL gives you access to the application.

If you want to learn **how to implement user authentication in React step by step**, check out the ["React Authentication By Example" developer guide](https://developer.auth0.com/resources/guides/spa/react/basic-authentication).

When you click on the **"Log In"** button, React takes you to the [Auth0 Universal Login page](https://auth0.com/docs/login/universal-login). Your users can log in to your application through a page hosted by Auth0, which provides them with a secure, standards-based login experience that you can customize with your own branding and various authentication methods, such as logging in with a username and password or with a social provider like Facebook or Google.

Once you log in, visit the protected **"Profile"** page to see all the user profile information that Auth0 securely shares with your application using [ID tokens](https://auth0.com/docs/security/tokens/id-tokens) and also available [via the Management API](https://auth0.com/docs/secure/tokens/access-tokens/management-api-access-tokens/get-management-api-tokens-for-single-page-applications).

Click on the **"Log Out"** button and try to access the [Profile page](http://localhost:4040/profile).

If everything is working as expected, React redirects you to log in with Auth0.

> [!NOTE]
> Normally you would hide this button if `isAuthenticated === false` but, for this demo, we keep it displayed to showcase the ability to have "protected" routes.
>

## Why Use Auth0?

Auth0 is a flexible drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users. We offer tons of guidance and SDKs for you to get started and [integrate Auth0 into your stack easily](https://auth0.com/developers/hub/code-samples/full-stack).
