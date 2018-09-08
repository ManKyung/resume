<template>
    <div>
        <div class="overlay-menu" :class="{ active: isActive }">
			<div class="menu-table">
				<div class="menu-table-cell">
					<ul id="menu-main-menu" class="navigation">
                        <li><router-link to="/profile" tag="a" exact>Profile</router-link></li>
                        <li><router-link to="/resume" tag="a" exact>Resume</router-link></li>
                        <li><router-link to="/skill" tag="a" exact>Skill</router-link></li>
                        <li><router-link to="/interests" tag="a" exact>Interests</router-link></li>
                        <li><router-link to="/contact" tag="a" exact>Contact</router-link></li>
                    </ul>
				</div>
			</div>
		</div>
        <div class="show-menu-btn" :class="{ open: isActive }" @click="overlayToggle">
            <span></span><span></span><span></span>
		</div>
    </div>
</template>

<script>

export default {
    name: 'Layout',
    data () {
        return {
            isActive: false,
        }
    },
    created() {
        this.$EventBus.$on('menu-toggle', () => {
            this.isActive = false;
        });
    },
    methods: {
        overlayToggle: function (event) {
            this.isActive = !this.isActive;
        }
    }
}
</script>
