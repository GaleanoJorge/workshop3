'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$12$cEe4sa2yU5xDT5RLsaB94udNNVKhuAWTszTDyS/QWqMCe.d4eOrLG', //micontraseña
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};