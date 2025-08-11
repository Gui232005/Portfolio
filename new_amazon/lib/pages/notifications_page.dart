import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class NotificationsPage extends StatefulWidget {
  const NotificationsPage({super.key});

  @override
  State<NotificationsPage> createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  List<String> notifications = [
    "New product available: Flutter Widgets",
    "Your order has been shipped!",
    "Discount on your favorite items!",
    "New features added to your account",
    "Reminder: Your subscription expires soon",
  ];

  Set<int> selectedIndexes = {};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          onPressed: () {
            context.pop();
          },
          icon: Icon(Icons.arrow_back),
        ),
        title: const Text('Notifications'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            ListView.builder(
              padding: EdgeInsets.all(8.0),
              shrinkWrap: true,
              itemCount: notifications.length,
              itemBuilder: (context, index) {
                final isSelected = selectedIndexes.contains(index);
                return Card(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        if (!isSelected) {
                          selectedIndexes.add(index);
                        }
                      });
                    },
                    child: ListTile(
                      title: Text(notifications[index]),
                      leading: Icon(
                        Icons.notifications,
                        color: isSelected ? Colors.blueGrey : Colors.blue,
                      ),
                      trailing: IconButton(
                        icon: Icon(Icons.delete, color: Colors.red),
                        onPressed: () {
                          setState(() {
                            notifications.removeAt(index);
                            // Atualiza os índices selecionados
                            Set<int> updated = {};
                            for (var i in selectedIndexes) {
                              if (i == index) continue;
                              if (i > index) {
                                updated.add(i - 1);
                              } else {
                                updated.add(i);
                              }
                            }
                            selectedIndexes = updated;
                          });
                        },
                      ),
                    ),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
