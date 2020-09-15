
$(document).ready(function () {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	$('#sign-up-form').submit(function () {
		let nameEl = $('#name');
		let emailEl = $('#email');
		let passwordEl = $('#password');
		let confirmEl = $('#confirm');

		if (
			!checkEl(nameEl) ||
			!checkEl(emailEl) ||
			!checkEl(passwordEl) ||
			!checkEl(confirmEl)
		){
			return false;
		}

		if (!isEmail(emailEl.val())){
			emailEl.addClass('is-invalid')

			return false;
		} else {
			emailEl.removeClass('is-invalid');
		}

		if (passwordEl.val() !== confirmEl.val()){
			confirmEl.addClass('is-invalid');

			return false;
		} else {
			confirmEl.removeClass('is-invalid');
		}

		let btnSave = $('#btn-save');
		btnSave.addClass('lose-focus');
		btnSave.html("<i class='fa fa-spinner circular'></i> Registering...");

		return false;
	});


	$('#sign-in-form').submit(function () {
		let emailEl = $('#email');
		let passwordEl = $('#password');

		if (
			!checkEl(emailEl) ||
			!checkEl(passwordEl)
		){
			return false;
		}

		let btnSave = $('#btn-save');
		btnSave.addClass('lose-focus');
		btnSave.html("<i class='fa fa-spinner circular'></i> Signing in...");

		return false;
	});

	$('#add-form').submit(function () {
		let titleEl = $('#title');

		if (!checkEl(titleEl)){
			return false;
		}

		let btnSave = $('#btn-save');
		btnSave.addClass('lose-focus');
		btnSave.html("<i class='fa fa-spinner circular'></i> Saving...");

		return false;
	});



	$('#add-note-form').submit(function () {
		const titleEl = $('#title');
		const bodyEl = $('#body');

		if (!checkEl(titleEl) || !checkEl(bodyEl)){
			return false;
		}

		let btnSave = $('#btn-save');
		btnSave.addClass('lose-focus');
		btnSave.html("<i class='fa fa-spinner circular'></i> Saving...");

		return false;
	});
});

let taskCompleteCurrentColor = '';

function checkEl(el) {
	let val = el.val();
	if (val === '') {
		el.addClass('is-invalid');
		return false;
	} else {
		el.removeClass('is-invalid');
		return true;
	}
}

function updateTaskColor(color) {
	let completeTaskEl = $('.complete-task');
	let btnAddTaskEl = $('#btn-add-task');
	let btnSaveEl = $('#btn-save');
	let btnShowTaskEl = $('#btn-show-task');
	let titleEl = $('#title');

	completeTaskEl.removeClass('text-' + taskCompleteCurrentColor);
	completeTaskEl.addClass('text-' + color);

	btnAddTaskEl.removeClass('btn-' + taskCompleteCurrentColor);
	btnAddTaskEl.addClass('btn-' + color);

	btnSaveEl.removeClass('btn-' + taskCompleteCurrentColor);
	btnSaveEl.addClass('btn-' + color);

	btnShowTaskEl.removeClass('btn-outline-' + taskCompleteCurrentColor);
	btnShowTaskEl.addClass('btn-outline-' + color);

	titleEl.removeClass('border-' + taskCompleteCurrentColor);
	titleEl.addClass('border-' + color);

	taskCompleteCurrentColor = color;

	// Submit $('#update-task-list-form')
	showToast('Task List Color Updated');

}

function showTask(task,created,completed) {
	$('#task-info').html(task);
	$('#task-date').html(created);
	if (completed === ''){
		$('#task-completed').text('Not Done');
	} else {
		$('#task-completed').text('Done');
	}

	$('#taskModal').modal('show');
}

function showToast(text,type='ok',timeout=3000) {
	if (type === 'ok'){
		$('#toast-status').html("<i class='fa fa-check-circle text-success'>");
		$('#toast-title').text('Success!');
	} else {
		$('#toast-status').html("<i class='fa fa-exclamation-circle text-danger'>");
		$('#toast-title').text('Error!');
	}
	$('#myToast').attr('data-delay', timeout);
	$('#toast-body').text(text);
	$('#myToast').toast('show');
}

function undo() {
	activeTimer.clearTimeout();
	showToast('Undo Successful','err');
}

function isEmail(value) {
	let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailReg.test(value);
}
function goTo(path) {
	location.href = path;
}