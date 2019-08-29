<template>
    <div class="container">
        <div class="mui-content">
			<div class="mui-content-padded" style="margin: 5px;">
				<h5>搜索：</h5>
				<div class="mui-input-row mui-search">
					<input type="search" class="mui-input-clear" placeholder="">
				</div>
				<h5 class="mui-plus-visible">语音输入搜索框：</h5>
				<div class="mui-input-row mui-search mui-plus-visible">
					<input id="search" type="search" class="mui-input-speech mui-input-clear" placeholder="带语音输入的搜索框">
				</div>
				


				<form class="mui-input-group">
					<div class="mui-input-row">
						<label>用户名</label>
						<input type="text" placeholder="请输入用户名">
					</div>
					<div class="mui-input-row">
						<label>密码</label>
						<input type="text" class="mui-input-clear" placeholder="请输入密码">
					</div>

					<div class="mui-input-row mui-plus-visible">
						<label>Inpt</label>
						<input type="text" class="mui-input-speech mui-input-clear" placeholder="语音输入">
					</div>
					<div class="mui-button-row">
						<button type="button" class="mui-btn mui-btn-primary" onclick="return false;">确认</button>&nbsp;&nbsp;
						<button type="button" class="mui-btn mui-btn-danger" onclick="return false;">取消</button>
					</div>
				</form>
				<div class="mui-input-row" style="margin: 10px 5px;">
					<textarea id="textarea" rows="5" placeholder="会员信息"></textarea>
				</div>
                <img src="../images/one.png" alt="">
			</div>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .container{
        padding-top: 15px;
    }
    .container img{
        width: 360px;
    }
</style>