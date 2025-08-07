import 'package:go_router/go_router.dart';
import 'package:new_amazon/main.dart';
import 'package:new_amazon/pages/notifications_page.dart';

class GoRouteConfig {
  final GoRouter router = GoRouter(
    initialLocation: '/',
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => MyHomePage(),
      ),
      GoRoute(
        path: '/notifications',
        builder: (context, state) => NotificationsPage(),
      ),
    ],
  );
}
