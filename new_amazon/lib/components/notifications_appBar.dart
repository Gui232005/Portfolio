import 'package:flutter/material.dart';

class NotificationsAppbar extends StatefulWidget {
  const NotificationsAppbar({super.key});

  @override
  State<NotificationsAppbar> createState() => _NotificationsAppbarState();
}

class _NotificationsAppbarState extends State<NotificationsAppbar> {
  @override
  Widget build(BuildContext context) {
    return PopupMenuItem(
      child: ListView(
        children: [
          ListTile(
            leading: Icon(Icons.notifications),
            title: Text('Notification 1'),
            subtitle: Text('This is the subtitle for notification 1'),
          ),
          ListTile(
            leading: Icon(Icons.notifications),
            title: Text('Notification 2'),
            subtitle: Text('This is the subtitle for notification 2'),
          ),
          // Add more ListTiles for additional notifications
        ],
      ),
    );
  }
}
