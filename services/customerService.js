import { Customer } from "../models/customers.js";
import { NotFoundError } from "../common/errors.js";

export const CustomerService = {
  async getAll() {
    return Customer.findAll();
  },

  async getById(id) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new NotFoundError(`Customer with id ${id} not found`);

    return customer;
  },

  async create(data) {
    return Customer.create(data);
  },

  async update(id, data) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new NotFoundError(`Customer with id ${id} not found`);

    return customer.update(data);
  },

  async delete(id) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new NotFoundError(`Customer with id ${id} not found`);
    await customer.destroy();

    return customer;
  },
};
