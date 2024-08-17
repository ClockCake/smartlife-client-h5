<template>
<div class="month-selector" @click.stop="toggleDropdown" ref="dropdown">
    <div class="selected-option">
    {{ selectedMonth }} <span class="arrow">▼</span>
    </div>
    <ul class="options" v-if="isOpen">
    <li v-for="month in months" :key="month" @click.stop="selectMonth(month)">
        {{ month }}
    </li>
    </ul>
</div>
</template>
  
<script>
export default {
name: 'MonthSelector',
data() {
    return {
    selectedMonth: '本月',
    isOpen: false,
    months: ['本月', '上月', '最近三个月', '最近半年', '最近一年'],
    isMounted: false
    }
},
methods: {
    toggleDropdown() {
    this.isOpen = !this.isOpen;
    },
    selectMonth(month) {
    this.selectedMonth = month;
    this.isOpen = false;
    this.$emit('month-selected', month);
    },
    closeDropdown(e) {
    if (this.isMounted && this.$refs.dropdown && !this.$refs.dropdown.contains(e.target)) {
        this.isOpen = false;
    }
    }
},
mounted() {
    this.$nextTick(() => {
    this.isMounted = true;
    document.addEventListener('click', this.closeDropdown);
    });
},
beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
}
}
</script>

<style scoped>
.month-selector {
position: relative;
display: inline-block;
cursor: pointer;
}

.selected-option {
padding: 8px 16px;
background-color: white;
border-radius: 20px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
display: flex;
align-items: center;
justify-content: space-between;
min-width: 100px;
}

.arrow {
font-size: 0.8em;
margin-left: 8px;
}

.options {
position: absolute;
top: 100%;
left: 0;
right: 0;
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
list-style: none;
padding: 0;
margin-top: 8px;
z-index: 10;
}

.options li {
padding: 8px 16px;
}

.options li:hover {
background-color: #f0f0f0;
}
</style>