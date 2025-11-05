describe('Login Test (Username)', () => {

    it('should validate username, hash password and login successfully', () => {
        cy.intercept('POST', '/api/login').as('loginRequest')

        cy.visit('http://localhost:8080/Login')

        // ====  Kiểm tra username đúng chuẩn ====
        const username = 'levanan245'  // Ví dụ hợp lệ

        // Cho phép: chữ thường, chữ hoa, số, dấu gạch dưới, 3–20 ký tự
        expect(username).to.match(/^[a-zA-Z0-9_]{3,20}$/)

        // Điền thông tin vào form
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type('123456')
        cy.get('button[type="submit"]').click()

        // ==== 2️⃣ Kiểm tra mật khẩu hash ====
        cy.wait('@loginRequest').then((interception) => {
            const { body } = interception.request

            // Mật khẩu không được gửi plaintext
            expect(body.password).to.not.equal('123456')

            // Kiểm tra xem password có dạng hash (ví dụ SHA256, MD5, v.v.)
            expect(body.password).to.match(/^[a-f0-9]{30,}$/)

            // Kiểm tra username gửi đúng
            expect(body.username).to.equal(username)
        })

        // ==== 3️⃣ Kiểm tra login thành công ====
        cy.url().should('include', '/dashboard')
        cy.contains('Welcome').should('be.visible')
    })
})
