// ignore_for_file: no_leading_underscores_for_local_identifiers

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:new_amazon/components/bottomNavigation.dart';
import 'components/app_bar.dart' as custom_app_bar;
import 'routing.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  await Supabase.initialize(
    url: 'https://vmcrggrnvyldcbmvuicw.supabase.co',
    anonKey: 'sbp_cf10d416cea421f6df26fb7263afde6ffc936aae',
  );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    late final GoRouter _router = GoRouteConfig().router;
    return MaterialApp.router(
      routerConfig: _router,
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: custom_app_bar.CustomAppBar(),
        backgroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        child: GestureDetector(
          child: Column(
            children: [
              SizedBox(
                height: 60,
                child: Center(
                  child: RichText(
                    text: TextSpan(
                      style: TextStyle(fontSize: 17, color: Colors.black),
                      children: [
                        TextSpan(text: 'Welcome to the '),
                        TextSpan(
                          text: 'NextBuy',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 18,
                          ),
                        ),
                        TextSpan(text: ' App'),
                      ],
                    ),
                  ),
                ),
              ),
              SizedBox(
                child: CarouselSlider(
                  options: CarouselOptions(
                    height: 100,
                    autoPlay: true,
                    enlargeCenterPage: true,
                    aspectRatio: 16 / 9,
                    viewportFraction: 0.8,
                  ),
                  items: [
                    //Here we will insert the most popular items
                    Container(
                      color: Colors.red,
                      child: Center(child: Text('Item 1')),
                    ),
                    Container(
                      color: Colors.green,
                      child: Center(child: Text('Item 2')),
                    ),
                    Container(
                      color: Colors.blue,
                      child: Center(child: Text('Item 3')),
                    ),
                    Container(
                      color: Colors.yellow,
                      child: Center(child: Text('Item 4')),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: CustomBottomNavigationBar(),
    );
  }
}
