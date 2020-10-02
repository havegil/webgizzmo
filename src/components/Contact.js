import React, { createRef }  from 'react';
import $ from 'jquery';

//var, const

class Contact extends React.Component{

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submitContactForm = this.submitContactForm.bind(this);
  
    };
  
    handleChange(e) {

        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submitContactForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["fullName"] = "";
            fields["email"] = "";
            fields["phone"] = "";
            fields["message"] = "";
            this.setState({fields:fields});
            console.log("Form submitted");
        }
    }

    validateForm() {
       
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
 
        if (!fields["fullName"]) {
            formIsValid = false;
            errors["fullName"] = "*Please enter your full name.";
        }

        if (typeof fields["fullName"] !== "undefined") {
            formIsValid = false;
            errors["fullName"] = "*Please enter alphabet characters only.";
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email.";
            }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "*Please enter contact phone #.";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["phone"] = "*Please enter valid phone #.";
            }
        }

        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "tell us bit about your needs";
        }
            
        this.setState({
            errors: errors
        });
        
        return formIsValid;     
    }

    componentDidMount(){        
        
        setTimeout(() =>{
            console.log("now anumating contact us down")
            $('.contact-us-label').addClass('slideDownFade');
        }, 1500);
    } 

    handleScroll = e => {
        let element = e.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          // do something at end of scroll
          console.log("Scroll has ended")
        }
    }

    render = () => {
        return (            

                <div className="gizzmo-connect">
                    <a ><div className="connect-copy-wrap">
                        <h1>Start using your gizzmo today! </h1>
                        <p>We're never more than 12 hours away from reaching back.</p>
                    </div></a>

                    <div class="contact-us-label">
                        <span>Contact us</span>
                    </div>

                    <div className ="connect-request-wrap">
                        <div className ="form-wrap">
                            <form id="connectForm" name="connectForm" action="submit" method="post" noValidate="novalidate"  onSubmit= {this.submitContactForm} >
                                <div className="form-group">
                                    <input type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    className="form-items" 
                                    placeholder="Full name" 
                                    required="" 
                                    aria-required="true"  
                                    value={this.state.fields.fullName} 
                                    onChange={this.handleChange} />
                                </div>
                                <div className="errorMsg">{this.state.errors.fullName}</div>

                                <div className="form-group">
                                    <input type="text" 
                                    id="email" 
                                    name="email" 
                                    className="form-items custom_email" 
                                    placeholder="Email" 
                                    required="" 
                                    aria-required="true"
                                    value={this.state.fields.email} 
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="errorMsg">{this.state.errors.email}</div>

                                <div className="form-group">
                                    <input type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    className="form-items custom_phone" 
                                    placeholder="Phone" 
                                    required="" 
                                    aria-required="true"
                                    value={this.state.fields.phone} 
                                    onChange={this.handleChange}/>                            
                                </div>
                                <div className="errorMsg">{this.state.errors.phone}</div>

                                <div className="form-group">
                                    <textarea rows="5" 
                                    id="message" 
                                    name="message" 
                                    className="form-items" 
                                    placeholder="Message (best time to  call)" 
                                    required="" 
                                    aria-required="true"
                                    value={this.state.fields.message} 
                                    onChange={this.handleChange}></textarea>
                                </div> 
                                <div className="errorMsg">{this.state.errors.message}</div>
    
                                <button className="btn-secondary frm-btn-submit" type="submit" id="submit" name="submit" value="submit">Send Now <span>→</span></button>
                                 
                            </form>
                        </div>
                        
                        <div className="email-wrap">
                            <div className="email-content">
                                <p>
                                    <span>Info<span>.</span></span> <br/>  
                                   <a href="">info@webgizzmo.com  →</a>                               
                                </p>
                                <p>
                                    <span>Sales<span>.</span></span><br/> 
                                    <a href="">sales@webgizzmo.com  →</a>
                                </p>
                                
                            </div>
                        </div>
                        
                    </div>

                </div>
        
        );              
    };
}

export default Contact;   