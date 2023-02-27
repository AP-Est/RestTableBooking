import createElement from '../Utils/createElement';

export function displaySignUpLogIn() {
    const form = createElement('div', 'form');
    form.innerHTML = `
  <ul class="tab-buttons">
    <li class="tab active"><a class="signup tab-text">Sign Up</a></li>
    <li class="tab"><a class="login tab-text">Log In</a></li>
  </ul>
  
  <div class="tab-content">
    <div id="signup">   
     <form>
      
      <div class="field-wrap">
        <label class="tab-label">
            First Name<span class="req">*</span>
        </label>
        <input class="tab-input tab-input-first input-reg-name" type="text" minlength="3" maxlength="20" required />
      </div>

      <div class="field-wrap">
        <label class="tab-label">
            Telephone Number (111-11-1234567)<span class="req">*</span>
        </label>
        <input class="tab-input tab-input-first input-reg-tel" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{7}" required />
     </div>

      <div class="field-wrap">
        <label class="tab-label">
          Email Address<span class="req">*</span>
        </label>
        <input class="tab-input tab-input-first input-reg-email" type="email" required />
      </div>
      
      <div class="field-wrap field-before-error">
        <label class="tab-label">
          Set a Password<span class="req">*</span>
        </label>
        <input class="tab-input tab-input-first input-reg-password" type="password" minlength="6" required autocomplete="off"/>
      </div>
      
      <button type="submit" class="button button-block button-register"/>REGISTER</button>
      
      </form>

    </div>
    
    <div id="login">   
      <h1 class="tab-h1">Welcome Back!</h1>
      
      <form>
      
        <div class="field-wrap">
        <label class="tab-label">
          Email Address<span class="req">*</span>
        </label>
        <input class="tab-input tab-input-second input-login-email" type="email"required />
      </div>
      
      <div class="field-wrap field-before-error-login">
        <label class="tab-label">
          Password<span class="req">*</span>
        </label>
        <input class="tab-input tab-input-second input-login-password" type="password" minlength="6" required autocomplete="off"/>
      </div>
      
      <button type="submit" class="button button-block button-login"/>Log In</button>
      
      </form>

    </div>
    
  </div>
    `;

    return form;
}
