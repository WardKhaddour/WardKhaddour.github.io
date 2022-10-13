import other from './otherContact.js';

export default /*html*/ `
<section class="section-contact" id="#contact">
  <h1 class="heading-linear mb-md">Contact</h1>
  <div class="contact">
    <form action="#" class="form">
      <h1 class="heading-secondary">Send me a private message</h1>
      <div class="form__group">
        <input id="name" type="text" class="form__input form__input--name" required placeholder="Name" />
        <label class="form__label" for="name">Name</label>
      </div>

      <div class="form__group">
        <input id="email" type="email" class="form__input form__input--email" required placeholder="Email" />
        <label class="form__label" for="email">Email</label>
      </div>

      <div class="form__group">
        <input id="subject" type="subject" class="form__input form__input--subject" required placeholder="Subject" />
        <label class="form__label" for="subject">Subject</label>
      </div>

      <div class="form__group">
        <textarea id="content" type="content" class="form__input form__input--content" required rows="3" placeholder="Content"></textarea>
        <label class="form__label" for="content">Content</label>
      </div>
      <div class="form__group">
        <button class="link btn form__input--btn" type="submit">Send</button>
      </div>
    </form>
    <div class="other-contact">
      <h1 class="heading-secondary">OR</h1>
      <ul class="other-contact__list">
        ${other}
      </ul>
    </div>
  </div>
</section>
`;
