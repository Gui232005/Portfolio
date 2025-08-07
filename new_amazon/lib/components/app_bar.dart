import 'package:flutter/material.dart';
import 'search_bar.dart' as custom_search_bar;
import 'package:go_router/go_router.dart';

class CustomAppBar extends StatefulWidget{
  const CustomAppBar({super.key});

  @override
  State<CustomAppBar> createState() => _CustomAppBarState();
}

class _CustomAppBarState extends State<CustomAppBar> {
  @override
  Widget build(BuildContext context) {
    return AppBar(
        leading: Image.asset('assets/logo.png'),
        title: const custom_search_bar.SearchBar(),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications),
            onPressed: () {
              context.push('/notifications');
            },
          ),
        ],
        backgroundColor: Colors.white,
    );
  }
}