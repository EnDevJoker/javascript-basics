let users = [];

        function createUser() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;


            users.push({ id: users.length + 1, name, email, age });

            renderUserList();
        }

        function updateUser() {
            const id = parseInt(document.getElementById('updateId').value);
            const newEmail = document.getElementById('newEmail').value;
            const newAge = document.getElementById('newAge').value;

            const user = users.find(user => user.id === id);
            if (user) {
                user.email = newEmail;
                user.age = newAge;
                renderUserList();
            } else {
                alert('User not found!');
            }
        }

        function deleteUser() {
            const id = parseInt(document.getElementById('deleteId').value);

            users = users.filter(user => user.id !== id);

            renderUserList();
        }

        function renderUserList() {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `User ${user.id}: ${user.name} - ${user.email} - ${user.age}`;
                userList.appendChild(li);
            });
        }
