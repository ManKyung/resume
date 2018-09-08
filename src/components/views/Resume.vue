<template>
    <section class="split-content">
        <div class="fw-page-builder-content">
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1>Education &amp; Work Experience.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-4">
                            <h6><div class="bs-callout">Education.</div></h6>
                        </div>
                        <div class="col-sm-8">
                            <ul class="resume-info">
                                <li>
                                    <h6 class="resume-title">Korea University of Technology and Education</h6>
                                    <h6 class="resume-meta">2007 ~ 2013</h6>
                                    <p>Awards: 졸업 작품 동상, 성적 우수 장학금(3회)<br/>
                                    충청남도 천안에 있는 고용노동부 산하의 대학교로 공학특성화 대학교(컴퓨터공학부)</p>
                                    <div class="clearfix"></div>
                                </li>
                                <li>
                                    <h6 class="resume-title">Seoul Gwangmun High School</h6>
                                    <h6 class="resume-meta">2004 ~ 2007</h6>
                                    서울 강동구 고덕동에 소재한 고등학교(자연계열)<div class="clearfix"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="module">
                <div class="container-fluid container-custom">
                    <div class="row">
                        <div class="col-sm-4">
                            <h6><div class="bs-callout">Work Experience.</div></h6>
                        </div>
                        <div class="col-sm-8">
                            <ul class="resume-info">
                                <li>
                                    <h6 class="resume-title">Software Engineer - Nexon Korea</h6>
                                    <h6 class="resume-meta">2016.07 ~ </h6>
                                    <p>Performance Counter Monitoring Alarm System Developmenet<br/>
                                    Language: Golang, C#, PHP<br/>
                                    Front: Vue.js, Javascript, Jquery, Bootstrap 4.1, CSS3, SASS, NPM<br/>
                                    DBMS: MariaDB, PostgreSql 9.4<br/>
                                    NoSql: Redis, ElasticSearch, Splunk<br/>
                                    Server: Ubuntu 14.x ~ 16.x<br/>
                                    ETC: AWS Infrastruct Architect, vscode, gitlab</p>
                                    Tags: <span class="badge badge-primary">PerformanceCounter</span>
                                    <span class="badge badge-primary">BigData</span>
                                    <span class="badge badge-primary">Threshold</span>
                                    <span class="badge badge-primary">Monitoring</span>
                                    <span class="badge badge-primary">Chart</span>
                                    <div class="clearfix"></div>
                                </li>
                                <li>
                                    <h6 class="resume-title">Software Engineer - StudyMax</h6>
                                    <h6 class="resume-meta">2015.08 ~ 2015.11</h6>
                                    <p>Web Developer<br/>
                                    Language: PHP, Codegniter<br/>
                                    Front: Javascript, Jquery, Bootstrap 3.x, CSS3<br/>
                                    DBMS: Mssql<br/>
                                    Server: CentOS<br/>
                                    ETC: Admin Page, Daum Map API<br/>
                                    URL : <a href="https://speakingdom.com" target="_blank">Speakingdom</a>, <a href="https://m.speakingmax.com" target="_blank">SpeakingMax(Mobile)</a></p>
                                    Tags: <span class="badge badge-primary">Education</span>
                                    <span class="badge badge-primary">Web Developer</span>
                                    <div class="clearfix"></div>
                                </li>
                                <li>
                                    <h6 class="resume-title">Software Engineer - Strapick(<strong>Startup</strong>)</h6>
                                    <h6 class="resume-meta">2013.12 ~ 2016.05</h6>
                                    <p>Web Developer<br/>
                                    Language: PHP, XE<br/>
                                    Front: Javascript, Jquery, Bootstrap 3.x, CSS3<br/>
                                    DBMS: Mysql 5.5<br/>
                                    Server: CentOS<br/>
                                    ETC: SNS Platform, Shopping Mall, Marketing tool, Raspberry Pi, Facebook Auto Like, Kakao API, NAVER API, FacebookA API<br/>
                                    Portfolio : Strapick<br/></p>
                                    Tags: <span class="badge badge-primary">StartUp</span>
                                    <span class="badge badge-primary">Web Developer</span>
                                    <span class="badge badge-primary">Hompage Maker</span>
                                    <span class="badge badge-primary">Marketer</span>
                                    <div class="clearfix"></div>
                                </li>
                                <li>
                                    <h6 class="resume-title">Software Engineer - Wins21</h6>
                                    <h6 class="resume-meta">2012.09 ~ 2013.12</h6>
                                    <p>패킷 분석 툴 &amp; 모니터링 시스템 개발<br/>
                                    Language: PHP 5.x, HTML5, CSS, Javascript, Jquery, Bootstrap<br/>
                                    DBMS: Mysql<br/>
                                    Server: CentOS 5.x, Windows Server 2008<br/>
                                    Etc: Apache, wireshark, ollydebuger</p>
                                    Tags: <span class="badge badge-primary">Web Hacking</span>
                                    <span class="badge badge-primary">Web Developer</span>
                                    <span class="badge badge-primary">Tool Developer</span>
                                    <div class="clearfix"></div>
                                </li>
                                <li>
                                    <h6 class="resume-title">Air Force 674 CERT</h6>
                                    <h6 class="resume-meta">2009.03 ~ 2011.04</h6>
                                    <p>홈페이지 관리 개발 & 모니터링 업무<br/>
                                    Language: PHP 5.2, HTML5, CSS, Javascript, Jquery<br/>
                                    DBMS: Oracle, Mysql<br/>
                                    Server: CentOS 5.x<br/>
                                    Awards: 해킹방어대회 공군사령관 상</p>
                                    Tags: <span class="badge badge-primary">Web Hacking</span>
                                    <div class="clearfix"></div>
                                    <div class="clearfix"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Resume',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
      this.$EventBus.$emit('background-image', require('../../assets/images/2.jpg'));
      this.$EventBus.$emit('menu-toggle');
  }
}
</script>
