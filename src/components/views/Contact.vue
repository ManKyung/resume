<template>
    <div>
        <section class="split-content">
                <!-- Page title-->
                <section class="module">
                    <div class="container-fluid container-custom">
                        <div class="row">
                            <div class="col-sm-12">
                                <h1>Contact.</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Page title end-->
                <!-- Contatc form-->
                <section class="module">
                    <div class="container-fluid container-custom">
                        <div class="row">
                            <div class="col-sm-4">
                                <h6>Send me an email.</h6>
                            </div>
                            <div class="col-sm-8">
                                <form id="contact-form" method="post" novalidate="">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="name" placeholder="First Name" required="" aria-invalid="false">
                                                <p class="help-block text-danger"></p>
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="lastname" placeholder="Last Name" required="" aria-invalid="false">
                                                <p class="help-block text-danger"></p>
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control" type="email" name="email" placeholder="E-mail" required="" aria-invalid="false">
                                                <p class="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea class="form-control" name="message" placeholder="Message" rows="7" required="" aria-invalid="false"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <input class="btn btn-brand" type="submit" value="Submit">
                                        </div>
                                    </div>
                                </form>
                                <!-- Ajax response-->
                                <div class="ajax-response text-center" id="contact-response"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Contatc form end-->
            </section>
    </div>
</template>

<script>


export default {
  name: 'Contact',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
      this.$EventBus.$emit('background-image', require('../../assets/images/6.jpg'));
      this.$EventBus.$emit('menu-toggle');
  }
}
</script>
