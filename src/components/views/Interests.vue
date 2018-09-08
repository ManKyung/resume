<template>
    <section class="split-content">
        <div class="fw-page-builder-content">
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1>Interests.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="module">
                <div class="container-fluid container-custom">
                    <!-- Page title-->
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-header">
                                <ul class="resume-info">
                                    <li>
                                        <h6 class="resume-title">Piano &amp; Composition</h6>
                                        <h6 class="resume-meta">15 years</h6>
                                        <p>Stage experience: More than 100 times<br/>
                                        Classic(chopin, <strong>debussy</strong>, beethoven, mozart), Newage, Jazz .
                                        </p>
                                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/a2DvKrg7sEE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                        <div class="clearfix"></div>
                                    </li>
                                    <li>
                                        <h6 class="resume-title">Guitar</h6>
                                        <h6 class="resume-meta">2 years</h6>
                                        <p>Finger Style: Twilight, Angel's Sunday</p>
                                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fstrikers1999%2Fvideos%2F1220445854710358%2F&show_text=0&width=560" width="100%" height="400px" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Interests',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
      this.$EventBus.$emit('background-image', require('../../assets/images/4.jpg'));
      this.$EventBus.$emit('menu-toggle');
  }
}
</script>
