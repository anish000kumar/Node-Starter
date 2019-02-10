function userRouter(route, userController) {
  route.get('/', userController.getAll);
  route.post('/', userController.create);
  route.get('/:userId', userController.get);
  route.put('/:userId', userController.update);
  route.delete('/:userId', userController.destroy);

  return route;
}

export default userRouter;
