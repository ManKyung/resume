<template>
    <section class="split-content">
        <div class="fw-page-builder-content">
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1>안녕하세요. <strong>정만경</strong> 입니다<br> Full Stack &amp; Front Developer</h1>
                            <p>Nexon Korea 에서 성농모니터링 시스템 개발을 DevOps로 담당을 하고 있으며 풀스택이지만 프론트 개발을 하는 것을 가장 좋아합니다.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-4">
                        <h6><div class="bs-callout">Personal Info.</div></h6>
                        </div>
                        <div class="col-sm-8">
                            <ul>
                                <li>정만경</li>
                                <li>1988.06.01</li>
                                <li>경기도 남양주</li>
                                <li><a href="mailto:strikers1999@naver.com">strikers1999@naver.com</a></li>
                                <li><a target="_blank" href="http://mysite.com">mysite.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-4">
                            <h6><div class="bs-callout">Services.</div></h6>
                        </div>
                        <div class="col-sm-8">
                            <p>Devops Developer, Front End, Back End, Infra Build., Full Stack, AWS, Hacker, RDB, NoSql, gitlab, vscode, Piano, Guitar, Composition, Music</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                        </div>
                        <div class="col-sm-4">
                            <ul class="service-list">
                                <li>홈페이지 설계</li>
                                <li>소프트웨어 개발</li>
                                <li>스타트업</li>
                                <li>성능 모니터링 시스템</li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                            <ul class="service-list">
                                <li>Websites &amp; Apps</li>
                                <li>반응형 디자인</li>
                                <li>마케팅 툴 개발</li>
                                <li>사용자 경험</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-4">
                        <h6><div class="bs-callout">Professional Skills.</div></h6>
                        </div>
                        <div class="col-sm-8">
                            <div class="progress-item">
                                <div class="progress-title">
                                    Web Prototype(Design, UI, UX)　<span class="p-coutn">80</span>%
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" style="width:75%;" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="progress-item">
                                <div class="progress-title">
                                    Front End, <span class="p-coutn">90</span>%
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" style="width:90%;"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="progress-item">
                                <div class="progress-title">
                                    Back End, <span class="p-coutn">70</span>%
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" style="width:70%;"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="progress-item">
                                <div class="progress-title">
                                    Infra Architect, <span class="p-coutn">70</span>%
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" style="width:70%;"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
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
  name: 'Profile',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
      this.$EventBus.$emit('background-image', require('../../assets/images/1.jpg'));
      this.$EventBus.$emit('menu-toggle');
  }
}
</script>
