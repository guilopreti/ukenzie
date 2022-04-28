import createCourseService from "../services/courses/createCouse.service";
import listCoursesService from "../services/courses/listCourses.service";

class CoursesController {
  async store(request, response) {
    const { title, price, category, duration_hours } = request.body;

    try {
      const course = await createCourseService({
        title,
        price,
        category,
        duration_hours,
        creator_id: request.user.id,
      });

      return response.status(201).json(course);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const courses = await listCoursesService();

      return response.json(courses);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  async show(request, response) {}

  async update(request, response) {}

  async delete(request, response) {}
}

export default CoursesController;
