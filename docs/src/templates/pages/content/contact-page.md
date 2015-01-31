---
  title: Contact Page
  subtitle: Creating a Contact Page
  layout: docs.hbs
  section: content
---
# Contact page

A contact page in {{theme.name}} requires the **Contact Form 7** plugin to be activated, in order to be able to create a contact form. Make sure you have downloaded and installed the correct plugin from  [here](http://wordpress.org/plugins/contact-form-7/).

## Adding a contact form
The Contact menu option on the left is where you add contact forms. To add a new contact form, select the **Contact > Add New** option from the left hand WordPress menu. From the next screen press the blue **Add New** button if you want to use the default **English** language, or choose one from the dropdown menu and press the **Add New** button next to it.

<img src="assets/images/content/contact-form.png" alt="Contact Form">

When you get to the next page, paste the following code into the **Form** field, after you have set a name for the contact form in the **Untitled** field.

    <div class="row">
        <div class="col-md-6">
            <div class="form-group form-icon-group">
                <i class="fa fa-user"></i> [text* your-name class:form-control placeholder "Your name *"] 
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group form-icon-group">
                <i class="fa fa-envelope" > </i> [email* your-email class:form-control placeholder"Your email *"] 
            </div>
        </div>
    </div>
    <div class="form-group form-icon-group">
          <i class="fa fa-pencil"></i> [textarea your-message class:form-control placeholder "Your   message"] 
    </div>
    [submit class:btn class:btn-primary "Send email"]

<img src="assets/images/content/form.png" alt="Form">

For the next options, in the **Mail** panel, fill the **To:** field with the email account that you want the emails to be redirected to. Every time the contact form gets filled by a user and sent, this email account will be receiving an email according to the format defined in the **Mail** panel. For the rest of the fields, you can leave the default values.
<img src="assets/images/content/contact-mail.png" alt="Contact Mail">

Now press **Save**. As you can see in the image below, you should now have a shortcode to paste in your page's content, which will add the contact form you just created.
<img src="assets/images/content/contact-save.png" alt="Contact Save">