import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content. You can put any content here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Featured Project</CardTitle>
        <CardDescription>Next.js + TypeScript</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-slate-100 rounded-md mb-4"></div>
        <p className="text-sm text-slate-600">
          A modern web application built with Next.js and TypeScript.
        </p>
      </CardContent>
    </Card>
  ),
}; 