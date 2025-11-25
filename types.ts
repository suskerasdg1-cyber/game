/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import * as THREE from 'three';
import { ReactThreeFiber } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
      directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
      group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
      mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      points: ReactThreeFiber.Object3DNode<THREE.Points, typeof THREE.Points>;
      instancedMesh: ReactThreeFiber.Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>;
      
      // Geometries
      bufferGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
      planeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
      boxGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      sphereGeometry: ReactThreeFiber.BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      cylinderGeometry: ReactThreeFiber.BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>;
      coneGeometry: ReactThreeFiber.BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>;
      torusGeometry: ReactThreeFiber.BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
      ringGeometry: ReactThreeFiber.BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>;
      circleGeometry: ReactThreeFiber.BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>;
      icosahedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>;
      octahedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>;
      
      // Materials
      meshBasicMaterial: ReactThreeFiber.MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      pointsMaterial: ReactThreeFiber.MaterialNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
      shaderMaterial: ReactThreeFiber.MaterialNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>;
      
      // Helpers / Attributes
      color: ReactThreeFiber.Node<THREE.Color, typeof THREE.Color>;
      fog: ReactThreeFiber.Node<THREE.Fog, typeof THREE.Fog>;
      bufferAttribute: ReactThreeFiber.Node<THREE.BufferAttribute, typeof THREE.BufferAttribute>;
    }
  }
}

export enum GameStatus {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  SHOP = 'SHOP',
  GAME_OVER = 'GAME_OVER',
  VICTORY = 'VICTORY'
}

export enum ObjectType {
  OBSTACLE = 'OBSTACLE',
  GEM = 'GEM',
  LETTER = 'LETTER',
  SHOP_PORTAL = 'SHOP_PORTAL',
  ALIEN = 'ALIEN',
  MISSILE = 'MISSILE'
}

export interface GameObject {
  id: string;
  type: ObjectType;
  position: [number, number, number]; // x, y, z
  active: boolean;
  value?: string; // For letters (G, E, M...)
  color?: string;
  targetIndex?: number; // Index in the GEMINI target word
  points?: number; // Score value for gems
  hasFired?: boolean; // For Aliens
}

export const LANE_WIDTH = 2.2;
export const JUMP_HEIGHT = 2.5;
export const JUMP_DURATION = 0.6; // seconds
export const RUN_SPEED_BASE = 22.5;
export const SPAWN_DISTANCE = 120;
export const REMOVE_DISTANCE = 20; // Behind player

// Google-ish Neon Colors: Blue, Red, Yellow, Blue, Green, Red
export const GEMINI_COLORS = [
    '#2979ff', // G - Blue
    '#ff1744', // E - Red
    '#ffea00', // M - Yellow
    '#2979ff', // I - Blue
    '#00e676', // N - Green
    '#ff1744', // I - Red
];

export interface ShopItem {
    id: string;
    name: string;
    description: string;
    cost: number;
    icon: any; // Lucide icon component
    oneTime?: boolean; // If true, remove from pool after buying
}